import React , {useState, useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './HomeScreen.css'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import  Auth from '../../googleAuth/Auth'
import logo from './Finallogo.png'

import { login } from '../../actions/userAction'


//const AuthDetails = new Auth()



const HomeScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const AuthDetails = new Auth()


    //use dispatch redux hook
const dispatch = useDispatch()


const userLogin = useSelector( state => state.userLogin)
const { loading, error, userInfo} = userLogin


    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch(login(email, password))
      //history.push("/infoscreen")
        
    }



   const googleLogin = () => {
       AuthDetails.login()
       
   }

    useEffect(() => {
        // if (userInfo) {
        //     history.push("/onboardingOne")
        // }
    }, [history ])




    return (

        <Col md={6} className="HomeScreen">
        <Col md={12} >
            <div className="_headerone">

         <Image src={logo} rounded  rounded className="_image"/>
        <h1 className="headerClass">Vaccine Tracker</h1>
        { error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}
            </div>

        <Form onSubmit={submitHandler} >
                    <Form.Group controlId='email' bsPrefix="fgroup" >
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>

                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >


                            </Form.Control>
                    </Form.Group>

                    <p className="forgotPassword"> 
                    <span className="_forgot_txt">
                    
                    Forgot password
                    </span>
                    </p>
                    <div className="_footer">


                    <Button
                    type="submit"
                    className="buttonClass"
                    >
                        Login In
                    </Button>

                    
                        </div>
                </Form>
                <div className="googlebuttondiv">
                <Button
                     onClick ={googleLogin}
                    className="googlebuttonClass"
                    >
                        Login In with Google
                </Button>

                </div>
                
        </Col>
        
  
        </Col>

       

    )
}

export default HomeScreen
