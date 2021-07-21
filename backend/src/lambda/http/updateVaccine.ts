import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { UpdateVaccineRequest } from '../../requests/UpdateVaccineRequest'
import { updatedTodo } from '../../Logic/todo'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../utils'


const logger = createLogger('updateTodos')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const vaccineId = event.pathParameters.vaccineId
  const updatedTodoBody: UpdateVaccineRequest = JSON.parse(event.body)

  // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    logger.info('Getting an item to be updated: ', {
        event
    })

    logger.info('Item to be updated: ', {
        updatedTodoBody,
        vaccineId
    })

    const jwtToken = getUserId(event)


    const result = await updatedTodo(jwtToken, vaccineId, updatedTodoBody)

    return {
        statusCode: result.statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Crendentials': true
        },
        body: result.body
    }

}
