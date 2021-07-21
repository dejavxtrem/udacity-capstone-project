import React , {useEffect, useState}from 'react'
import { Button, Image, Card} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import Avatar from './blankprofilepicture.png';
import EditModal from './EditModal';
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import './CardComponent.css';
import { deleteVaccineCard } from '../actions/vaccineAction'



const CardComponent = ({item, history}) => {

const [modalShow, setModalShow] = React.useState(false);

const dispatch = useDispatch()

const deleteCardInfo = useSelector(state => state.deleteVaccineCard)

//console.log(deleteCardInfo)

const {loading,  vaccineIdCards } = deleteCardInfo


const deleteHandler = () => {
    dispatch(deleteVaccineCard(item.vaccineId))
}

    return (
        <>
        {loading ? ( <Loader/> ) : (
            <div>
            <CardGroup className='_classbox'>
                  <Card >
                  <Card.Img variant="top" src={item ? item?.attachmentUrl : Avatar}  className ='_avatar'/>
                  </Card>
                  <Card.Body>
                  <Card.Title>Vaccine Information</Card.Title>
                   <Card.Text>
                       <p>Name: {item.name}</p>
                       <p>Vaccine-ID: {item.vaccineId}</p>
                       <p> SSN: {item.ssn}</p>
                       <p>VaccineType: {item.vaccineType}</p>
                   </Card.Text>
                  </Card.Body>
              </CardGroup>

              <Button variant="primary" type="submit" className="mt-4"
              onClick={() => setModalShow(true)}
              >
               Edit Information
               </Button>
   
               <EditModal
               show={modalShow}
               item={item}
               history={history}
               onHide={() => setModalShow(false)}
               />
               <div  className="mt-4">
               <Button variant="primary" type="submit" 
               onClick={deleteHandler}
               >
               Delete Account
               </Button>

               </div>
       </div>
        )}
        
        </>
    )
}

export default CardComponent
