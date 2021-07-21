import axios from "axios"


import {
    VACCINE_INFO_REQUEST,
    VACCINE_INFO_SUCCESS,
    VACCINE_INFO_FAIL,
    VACCINE_DETAILS_REQUEST,
    VACCINE_DETAILS_SUCCESS,
    VACCINE_DETAILS_FAIL,
    VACCINE_UPLOADURL_REQUEST,
    VACCINE_UPLOADURL_SUCCESS,
    VACCINE_UPLOADURL_FAIL,
    VACCINE_UPDATE_REQUEST,
    VACCINE_UPDATE_SUCCESS,
    VACCINE_UPDATE_FAIL,
    VACCINE_UPLOAD_SUCCESS,
    VACCINE_DELETE_REQUEST,
    VACCINE_DELETE_FAIL,
    VACCINE_DELETE_SUCCESS,

} from "../constants/vaccineConstants"


let baseURL = process.env.REACT_APP_BASEURL
console.log(baseURL)

export const vaccineForm = (name, ssn, vaccineType) => async(dispatch, getState) => {

    
   try {
        dispatch({
            type: VACCINE_INFO_REQUEST
        })

        const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
            JSON.parse(localStorage.getItem('googleInfo')) : null


        console.log(googleInfoFromStorage)

        

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${googleInfoFromStorage}`
            }
        }

        const  { data } = await axios.post(baseURL + `/vaccine`, {name, ssn, vaccineType} , config)

        dispatch({
            type: VACCINE_INFO_SUCCESS,
            payload: data
        })

    

   } catch (error) {
      dispatch({
          type: VACCINE_INFO_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
   }
}

//@fetch all vaccine Id cards
//Get products Actions
export const getVaccineCards = () => async (dispatch) => {
    try {
        dispatch({
            type: VACCINE_DETAILS_REQUEST
        })

        const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
            JSON.parse(localStorage.getItem('googleInfo')) : null

            console.log(googleInfoFromStorage)


            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${googleInfoFromStorage}`
                }
            }

            const  { data } = await axios.get(baseURL + `/vaccines` , config)

        dispatch({
            type: VACCINE_DETAILS_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({type: VACCINE_DETAILS_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message
        
        })
    }
}

//@fetch URL FOR UPLAOD
//POST to get presigned url
export const upLoadVaccineCardUrl = (vaccineId) => async (dispatch) => {
    try {
        dispatch({
            type: VACCINE_UPLOADURL_REQUEST
        })

        const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
            JSON.parse(localStorage.getItem('googleInfo')) : null

            console.log(googleInfoFromStorage)


            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${googleInfoFromStorage}`
                }
            }

            const  { data } = await axios.post(baseURL + `/todos/${vaccineId}/attachment` , '', config)

        dispatch({
            type: VACCINE_UPLOADURL_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({type: VACCINE_UPLOADURL_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message
        
        })
    }
}










//@fetch update vaccineCards
//update vaccine card details
export const updateVaccineCard = (name,ssn, vaccineType, file, vaccineId, vaccineUrl) => async (dispatch, getState) => {
    try {
        dispatch({
            type: VACCINE_UPDATE_REQUEST
        })

        const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
            JSON.parse(localStorage.getItem('googleInfo')) : null

            console.log(googleInfoFromStorage)


            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${googleInfoFromStorage}`
                }
            }

      const  { data } = await axios.patch(baseURL + `/vaccine/${vaccineId}` , {name, ssn, vaccineType}, config)


     const  { data:upload } = await axios.post(baseURL + `/todos/${vaccineId}/attachment` , '', config)

      console.log(upload)
      
        dispatch({
            type: VACCINE_UPDATE_SUCCESS,
            payload: data
        })
     

         const  { dataImage } = await axios.put(upload.uploadUrl, file)


        dispatch({
            type: VACCINE_UPLOAD_SUCCESS,
            payload: dataImage
        })


        
    } catch (error) {
        dispatch({type: VACCINE_UPDATE_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message
        
        })
    }
}






export const deleteVaccineCard = (vaccineId) => async (dispatch) => {
    try {
        dispatch({
            type: VACCINE_DELETE_REQUEST
        })

        const googleInfoFromStorage = localStorage.getItem('googleInfo') ? 
            JSON.parse(localStorage.getItem('googleInfo')) : null

            console.log(googleInfoFromStorage)


            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${googleInfoFromStorage}`
                }
            }

            const  { data } = await axios.delete(baseURL + `/vaccine/${vaccineId}` , config)

        dispatch({
            type: VACCINE_DELETE_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({type: VACCINE_DELETE_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message
        
        })
    }
}