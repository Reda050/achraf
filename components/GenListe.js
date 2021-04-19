import React from 'react';
import {Link} from 'react-router-dom'
class GenListe extends React.Component{
    render(){
return (
   <tr>
       <td>{this.props.utilisateur.code}</td>
       <td>{this.props.utilisateur.nom}</td>
       <td>{this.props.utilisateur.prenom}</td>
       <td>
        


<Link to={"/Edit/" + this.props.utilisateur._id}>Modifier</Link>  </td> 
<td>

     



<a href="#" onClick={()=>{this.props.deleteUtil(this.props.utilisateur._id)}}>Supprimer</a></td>
 
   </tr>
)        
    }
}


export default GenListe;