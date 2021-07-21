import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import VaccineInfoScreen from './screens/VaccineInfoScreen/VaccineInfoScreen';
import Callback from './screens/Callback';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css'




const App = () => {
  return (

    <Router>

    
 

     
    <Route path='/callback' component={Callback} />
    <Route path='/infoscreen' component={VaccineInfoScreen}  exact/>
     <Route path='/' component={HomeScreen}   exact/>
 
  
   
    </Router>




  )
}

export default App;
