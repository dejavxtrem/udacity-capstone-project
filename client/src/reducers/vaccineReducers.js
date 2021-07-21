import {
    VACCINE_INFO_REQUEST,
    VACCINE_INFO_SUCCESS,
    VACCINE_INFO_FAIL,
    VACCINE_DETAILS_REQUEST,
    VACCINE_DETAILS_SUCCESS,
    VACCINE_DETAILS_FAIL,
    VACCINE_UPDATE_REQUEST,
    VACCINE_UPDATE_SUCCESS,
    VACCINE_UPDATE_FAIL,
    VACCINE_UPLOADURL_REQUEST,
    VACCINE_UPLOADURL_SUCCESS,
    VACCINE_UPLOADURL_FAIL,
    VACCINE_UPLOAD_SUCCESS,
    VACCINE_DELETE_REQUEST,
    VACCINE_DELETE_SUCCESS,
    VACCINE_DELETE_FAIL
} from "../constants/vaccineConstants"

import {
    GOOGLE_LOGOUT
} from '../constants/googleConstant'



export const vaccineFormReducers = (state={}, action) => {
  
    switch(action.type) {
        case VACCINE_INFO_REQUEST :
            return {
                loading: true
            }

        case VACCINE_INFO_SUCCESS :
             return {
                 loading: false,
                 vaccineSuccess: action.payload
             }
        
        case VACCINE_INFO_FAIL :
                 return {
                     loading: false,
                     error: action.payload
                 }

        default:
            return state
    }
}

export const getVaccineCardReducers = (state={}, action) => {
    switch(action.type) {
        case VACCINE_DETAILS_REQUEST:
            return {
                loading: true
            }
        case VACCINE_DETAILS_SUCCESS:
            return {
                loading: false,
                vaccineIdCards: action.payload
            }
        case VACCINE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
 
 
 
        }
}

export const updateVaccineCardReducers = (state={}, action) => {
    switch(action.type) {
        case VACCINE_UPDATE_REQUEST:
            return {
                loading: true
            }
        case VACCINE_UPDATE_SUCCESS:
            return {
                loading: false,
                vaccineIdCards: action.payload
            }
        case VACCINE_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const upLoadVaccinePhotoReducers = (state={}, action) => {
    switch(action.type) {
        case VACCINE_UPLOADURL_REQUEST:
            return {
                loading: false
            }
        case VACCINE_UPLOADURL_SUCCESS:
            return {
                loading: false,
                vaccineUrl: action.payload
            }
        case VACCINE_UPLOADURL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const updateVaccineCardReducer = (state={}, action) => {
    switch(action.type) {
        case VACCINE_UPDATE_REQUEST:
            return {
                loading: true
            }
        case VACCINE_UPDATE_SUCCESS:
            return {
                loading: false,
                vaccineUrl: action.payload
            }
    
        case VACCINE_UPLOAD_SUCCESS:
            return {
                imageUrl: action.payload
            }
        case VACCINE_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const deleteVaccineCardReducer = (state={}, action) => {
    switch(action.type) {
        case VACCINE_DELETE_REQUEST:
            return {
                loading: true
            }
        case VACCINE_DELETE_SUCCESS:
            return {
                loading: false,
                vaccineUrl: action.payload
            }
    
        case VACCINE_DELETE_FAIL:
            return {
                imageUrl: action.payload
            }
        
        default:
            return state
    }
}

export const vaccineLogOutReducer = (state={}, action) => {
    switch(action.type) {
        case GOOGLE_LOGOUT:
            return {}

        default:
            return state
    }
}