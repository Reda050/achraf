import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar';
import Liste from './components/Liste';
import Ajout from './components/Ajout';
import AjoutDeux from './components/AjoutDeux';
import Logo from './components/logo';
import Edit from './components/edit';


  class App extends React.Component{

  render(){
  return (
    <div className="container">
       <Router>
        
        <Navbar/> 
        <Logo/>
       <Route path= "/Liste" component={Liste}/>
      <Route path= "/Ajout" component={Ajout}/>
      <Route path= "/AjoutDeux" component={AjoutDeux}/>
	<Route path="/Edit/:id" component={Edit} />
      </Router>
    </div>
  );
}
}

export default App;
