import React, {useEffect, useState}from 'react'
import Loader from '../components/Loader'
import  Auth from  '../googleAuth/Auth'




const Callback = ({history}) => {

const AuthDetails = new Auth(history)


useEffect(() => {
    AuthDetails.handleAuthentication()

}, [])


    return (
        <div>
            <Loader/>
        </div>
    )
}

export default Callback
