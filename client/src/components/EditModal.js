import React, {useState, useEffect} from 'react'
import { Modal, Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import  { upLoadVaccineCardUrl, updateVaccineCard  } from '../actions/vaccineAction'
import Loader from './Loader'

const EditModal = (props) => {

    const [name, setName] = useState(props.item.name)
    const [ssn, setSsn] =  useState(props.item.ssn)
    const [vaccineType, setVaccineType] = useState(props.item.vaccineType)
    const  [file, setFile] = useState(undefined)
    const [vaccineId, setVaccineId] = useState(props.item.vaccineId)
    const [uploadLink, setUploadLink ] = useState('')

    const dispatch = useDispatch()

    const  vaccineLink = useSelector(state => state?.upLoadVaccineCardUrl)

    
    // const { vaccineUrl: {uploadUrl}, loading} = vaccineLink

    //  //const { uploadUrl } = vaccineUrl

    // // console.log(vaccineLink)
    //console.log(props.history)



    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
       if (!file) {
          alert('empty file to upload')
       }
       console.log(props.item.vaccineId)
       //dispatch(upLoadVaccineCardUrl(props.item.vaccineId))
       setFile(file)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        //console.log(name, ssn, vaccineType, file, vaccineId, uploadUrl) 
        dispatch(updateVaccineCard(name,ssn, vaccineType, file, vaccineId))
        props.history.push('/infoscreen')
    }
    

    // useEffect(() => {  
    //     if (uploadLink === undefined || uploadUrl === '') {
    //         dispatch(upLoadVaccineCardUrl(props.item.vaccineId))
    //     } else {
    //         setUploadLink(uploadUrl)
    //     }
    // }, [dispatch, uploadUrl])

    return (
        <>
            <div>    
            <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Edit Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                
                <Form.Group>
                    <Form.Control id="image-Photo" 
                    label="Upload Photo" 
                    custom
                    onChange={uploadFileHandler}
                    type='file'
                    />
                </Form.Group>
    
                <Button variant="primary" type="submit" onClick={props.onHide}>
                    Submit
                </Button>
    
        
                  </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
            </div>

        
        </>
        
    )
}

export default EditModal

