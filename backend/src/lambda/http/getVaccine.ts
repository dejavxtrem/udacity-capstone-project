import 'source-map-support/register'
import { createLogger } from '../../utils/logger'
//import * as middy from 'middy'
import { getVaccinesIdCards } from '../../Logic/todo'
import { getUserId } from '../utils'
//import { cors } from 'middy/middlewares'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const logger = createLogger('getVaccine')

export const handler = 
	async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
		
		logger.info('get vaccines ids', {event})

		const jwtToken = getUserId(event)

		logger.info('Getting getTodos Event: ', {
			jwtToken
		})

		const items = await getVaccinesIdCards(jwtToken)

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Crendentials': true
			},
			body: JSON.stringify({msg: `To-dos for actual users`,
				items
			})
		}
	}


// handler.use(
// 	cors({
// 		credentials: true
// 	})
// )