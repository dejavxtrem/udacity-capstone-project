import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { getUserId } from '../utils'
import { deleteVaccine } from '../../Logic/todo' 



export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const vaccineId = event.pathParameters.vaccineId
  const jwtToken = getUserId(event)

  // TODO: Remove a TODO item by id

  const returnItem = await deleteVaccine(jwtToken, vaccineId)

  return {
    statusCode: 201,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Crendentials': true
    },
    body: JSON.stringify({
        body: returnItem
    })
  }
}
    