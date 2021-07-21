import * as AWS from 'aws-sdk'
//import * as AWSXRay from 'aws-xray-sdk'
const AWSXRay = require('aws-xray-sdk');
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { VaccineItem } from '../models/VaccineItem'
import { createLogger } from '../utils/logger'
import { UpdateVaccineRequest } from '../requests/UpdateVaccineRequest'


const XAWS = AWSXRay.captureAWS(AWS)
//const docClient = new AWS.DynamoDB.DocumentClient()

const logger = createLogger('todosAccess')


export class VaccineAccess {
    constructor (
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly vaccineTable = process.env.VACCINE_TABLE,
		private readonly s3 = new AWS.S3({ signatureVersion: 'v4' }),
		private readonly s3Bucket = process.env.VACCINE_IMAGES_S3_BUCKET,
		private readonly urlExpiration = process.env.VACCINE_SIGNED_URL_EXPIRATION
    ) {}


    async getVaccines(userId): Promise<VaccineItem[]> {
		const result = await this.docClient
			.query({
				TableName: this.vaccineTable,
				KeyConditionExpression: 'userId = :userId',
				ExpressionAttributeValues: {
					':userId': userId
				}
			})
			.promise()

		//logger.info('Result', result)

		const items = result.Items
		return items as VaccineItem[]
	}


  //create todo
	async createVaccine(vaccine: VaccineItem): Promise<VaccineItem> {
		await this.docClient
			.put({
				TableName: this.vaccineTable,
				Item: vaccine
			})
			.promise()

		return vaccine
	}


	//update Todo
	async updateVaccine(
		userId: string,
		vaccineId: string,
		parsedBody: UpdateVaccineRequest
	) {
		let result = {
			statusCode: 200,
			body: ''
		}

		let vaccineToBeUpdate = await this.docClient
			.query({
				TableName: this.vaccineTable,
				KeyConditionExpression: 'userId = :userId AND vaccineId = :vaccineId',
				ExpressionAttributeValues: {
					':userId': userId,
					':vaccineId': vaccineId
				}
			})
			.promise()

		//logger.info('Item to be updated', todoToBeUpdate)

		if (vaccineToBeUpdate.Items.length === 0) {
			result = {
				statusCode: 404,
				body: 'The vaccine card to be update was not found'
			}
			return result
		} 
		else {
			await this.docClient
            .update({
                TableName: this.vaccineTable,
                Key: {
                    userId,
                    vaccineId
                },
                UpdateExpression: 'set #name =:name, #ssn=:ssn, #vaccineType= :vaccineType', 
                ExpressionAttributeValues: {
                    ':name': parsedBody.name,
                    ':ssn': parsedBody.ssn,
                    ':vaccineType': parsedBody.vaccineType
                },
                ExpressionAttributeNames: {
                    '#name': 'name',
                    '#ssn': 'ssn',
                    '#vaccineType': 'vaccineType'
                },
                ReturnValues: 'UPDATED_NEW'
            })
            .promise()
		}

		return result
	}
	

  //delete todo
  async deleteVaccine(userId: string, vaccineId: string) {
		const result = await this.docClient.delete({
			TableName: this.vaccineTable,
			Key: {vaccineId,userId}
		}).promise()
       
		

	      return {
			  result,
			  vaccineId
		  }
}




async generateAttachmentUploadUrl(userId, vaccineId, ) {

	let result = {
		statusCode: 201,
		body: ''
	}

	let checkerExister = await this.docClient
	.query({
		TableName: this.vaccineTable,
		KeyConditionExpression: 'userId = :userId AND vaccineId = :vaccineId',
		ExpressionAttributeValues: {
			':userId': userId,
			':vaccineId': vaccineId
		}
	})
	.promise()

	logger.info('dynamodb table item', {
        checkerExister,
		userId,
		vaccineId
      })
    

	if (checkerExister.Items.length === 0) {
		result = {
			statusCode: 404,
			body: 'The item to be update was not found'
		}
		return result
	} else {

		await this.docClient
		.update({
			TableName: this.vaccineTable,
			Key: {
				userId,
				vaccineId
			},
			UpdateExpression: 'set #attachmentUrl =:attachmentUrl',
			ExpressionAttributeValues: {
				':attachmentUrl': `https://${this.s3Bucket}.s3.amazonaws.com/${vaccineId}`

			},
			ExpressionAttributeNames: { '#attachmentUrl': 'attachmentUrl' },
			ReturnValues: 'UPDATED_NEW'
		})
		.promise()


		 result.body =  this.s3.getSignedUrl("putObject", {
			Bucket: this.s3Bucket,
			Key: vaccineId,
			Expires: parseInt(this.urlExpiration)
		})
	

	}


	return result
}


}





function createDynamoDBClient(): AWS.DynamoDB.DocumentClient {
	// serverless offline will set this variable IS_OFFLINE to true
	if (process.env.IS_OFFLINE) {
		logger.info('Creating a local DynamoDB instance')
		return new XAWS.DynamoDB.DocumentClient({
			region: 'localhost',
			endpoint: 'http://localhost:8000'
		})
	}

	return new XAWS.DynamoDB.DocumentClient()
}

