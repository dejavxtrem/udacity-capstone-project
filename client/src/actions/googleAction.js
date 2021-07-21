import  Auth from '../googleAuth/Auth'


import {
  
    GOOGLE_LOGOUT
} from '../constants/googleConstant'


const AuthDetails = new Auth()

export const googleLogOut = () => async (dispatch) => {

       dispatch({
            type: GOOGLE_LOGOUT
        })
        
         AuthDetails.logout()
         console.log('logged-out')
         document.location.href = '/'
    
}