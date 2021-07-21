//import * as uuid from 'uuid'
import { VaccineItem } from '../models/VaccineItem'
import { VaccineAccess } from '../dataLayer/vaccineAccess'
//import { parseUserId } from '../auth/utils'
import * as uuid from 'uuid'
import { createLogger } from '../utils/logger'
import { CreateVaccineRequest } from '../requests/CreateVaccineRequest'
import { UpdateVaccineRequest } from '../requests/UpdateVaccineRequest'



const logger = createLogger('todos')

//creat a new instance of the class of the TodoAccess



const todoAccessProvider = new VaccineAccess()

export async function getVaccinesIdCards(jwtToken: string): Promise<VaccineItem[]> {

	const userId = jwtToken

	return todoAccessProvider.getVaccines(userId)
}




///create todo
export async function createVaccine(
	jwtToken: string,
	parsedBody: CreateVaccineRequest
) {
	const userId = jwtToken
	const vaccineId = uuid.v4()

	logger.info('userId', userId)
	logger.info('todoId', vaccineId)

	const vaccine = {
		userId,
		vaccineId,
		...parsedBody,
		attachmentUrl: ''
	}

	logger.info('Item to be created at business logic', vaccine)

	const toReturn = todoAccessProvider.createVaccine(vaccine)

	return toReturn
}

//update-vaccine
export async function updatedTodo(
	jwtToken: string,
	vaccineId: string,
	parsedBody: UpdateVaccineRequest
) {
	const userId = jwtToken
	const result = todoAccessProvider.updateVaccine(userId, vaccineId, parsedBody)

	return result
}


// //delete todo
export async function deleteVaccine(
	jwtToken: string,
	vaccineId: string,
) {
	const userId = jwtToken
	const vaccineReturn = await todoAccessProvider.deleteVaccine(userId , vaccineId)

	return vaccineReturn
}


// //upload urlpicture
export async function generateUploadUrl(jwtToken: string, vaccineId: string) {
	const userId = jwtToken
	const result = todoAccessProvider.generateAttachmentUploadUrl(userId, vaccineId)

	return result
}
