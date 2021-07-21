import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button, Image, Card} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import './Vaccinescreen.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import  { vaccineForm, getVaccineCards } from '../../actions/vaccineAction'
import  { googleLogOut } from '../../actions/googleAction'
import CardComponent from '../../components/CardComponent'
import { createSelector } from 'reselect'

// const selectVaccineCards = state => state?.vaccineCards;
// const vaccineCards = createSelector(selectVaccineCards, vaccineCards => vaccineCards);


const VaccineInfoScreen = ({history}) => {



const dispatch = useDispatch()

//useSelector get vaccinecards
const vaccineCards = useSelector(state => state.vaccineCards)

const {loading,  vaccineIdCards } = vaccineCards

//post vaccine cards
const vaccineSubmitCards = useSelector(state => state.vaccine)

const {loading: loadingSubmit} = vaccineSubmitCards

// console.log('vaccineCards', vaccineCards);
console.log(loadingSubmit)

//delete vaccine cards loading
const vaccineDeleteLoader = useSelector(state => state.deleteVaccineCard)

const {loading: loadingDelete } = vaccineDeleteLoader


//google info login details
 const googleInfoFromStorage = localStorage.getItem('googleInfo') ? JSON.parse(localStorage.getItem('googleInfo')) : null
 


 const [name, setName] = useState('')
 const [vaccineId, setVaccineId ] = useState('')
 const [ssn,  setSsn] = useState('')
 const [vaccineType, setVaccineType] = useState('')
 const  [image, setImage] = useState('')
 const [uploadPhoto, setUploadPhoto] = useState('')
 const  [file, setFile] = useState(undefined)

 
 const logOutHandler = () => {
     dispatch(googleLogOut())
 }
 

  const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
     if (!file) {
        alert('empty file to upload')
     }
      setFile(file)
  }

  useEffect(() => {
      if(!loadingSubmit)
        dispatch(getVaccineCards()) 
  }, [dispatch, loadingSubmit])

  useEffect(() => {
      if(!googleInfoFromStorage) {
        history.push('/')
      } else {
        if (!loadingDelete) {
            dispatch(getVaccineCards()) 
        }
      } 
    
}, [dispatch, loadingDelete, googleInfoFromStorage])


const clearTextInput = () => {
    setName('')
    setSsn('')
    setVaccineType('')
}

  const submitHandler = (e) => {
      e.preventDefault()
      console.log(name,vaccineId, ssn, vaccineType) 
      dispatch(vaccineForm(
        name,
        ssn,
        vaccineType
      ))
      clearTextInput()
  }

    return (
        <Container>
     {loadingSubmit ? ( <Loader/> ) : loadingDelete ? (<Loader/>) : (
            <Row className="_rowdetails">
            <Col md={4} className="mb-4">
                <h2>Create Vaccine ID Cards</h2>
              <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

         {/* <Form.Group controlId="vaccineId">
                <Form.Label>VaccineID</Form.Label>
                <Form.Control type="text" 
                placeholder="VaccineID" 
                value={vaccineId}
                onChange={(e) => setVaccineId(e.target.value)}
                />
            </Form.Group> */}
            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Form.Group controlId="ssn">
                <Form.Label>Social Security Number</Form.Label>
                <Form.Control type="text" 
                placeholder="SSN"
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="vaccineType">
                <Form.Label>VaccineType</Form.Label>
                <Form.Control type="text" 
                placeholder="VaccineType"
                value={vaccineType}
                onChange={(e) => setVaccineType(e.target.value)}
                />
            </Form.Group>
            
            {/* <Form.Group>
                <Form.File id="image-Photo" 
                label="Upload Photo" 
                custom
                onChange={uploadFileHandler}
                />
            </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>

    
              </Form>
            </Col>
            <Col  md={4} className="_firstcolumn" >
                {
                    vaccineIdCards?.items?.map((item) => (
                        <div key={item.vaccineId}>
                            <CardComponent item={item} history={history}/>   
                        </div>
                                 
                     )) 

                }
                        
            </Col>
            
            <Col>
            <Button variant="primary" type="submit"
            onClick={logOutHandler}
            >
                Log-Out
                </Button>
            </Col>
        </Row>
     )}
         

          


        </Container>
  

    )
}

export default VaccineInfoScreen
