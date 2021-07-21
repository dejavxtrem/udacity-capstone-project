
import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer
} from './reducers/userReducers'


import {
    vaccineFormReducers,
    getVaccineCardReducers,
    upLoadVaccinePhotoReducers,
    updateVaccineCardReducer,
    deleteVaccineCardReducer,
    vaccineLogOutReducer
} from './reducers/vaccineReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    vaccine: vaccineFormReducers,
    vaccineCards: getVaccineCardReducers,
    upLoadVaccineCardUrl: upLoadVaccinePhotoReducers,
    updateVaccineCard: updateVaccineCardReducer,
    deleteVaccineCard: deleteVaccineCardReducer,
    googleLogOut: vaccineLogOutReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null

const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
    JSON.parse(localStorage.getItem('googleInfo')) : null



const initialState = {
    userLogin: {userInfo: googleInfoFromStorage} ,
    upLoadVaccineCardUrl: '',
    
 }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store