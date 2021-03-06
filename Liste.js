import React from 'react';
import GenListe from './GenListe';
import axios from 'axios';

class Liste extends React.Component{
    constructor(props){
        super(props);
            this.state={
                utilisateurs:[]

            }
this.deleteUtil = this.deleteUtil.bind(this)
    }
        componentDidMount(){
           //this.setState ({utilisateurs: utils})
          axios.get('http://10.30.40.121:3435/Liste')

          .then(response => {
              console.log(response.data);
                if (response.data.length > 0){
                    this.setState({
                        utilisateurs: response.data
                    })
                }
            }) 
            .catch((error)    =>{
            console.log(error);
            })
          }
        deleteUtil(id){
            axios.delete('http://10.30.40.121:3435/delstudent/'+id)
            .then(res =>{
		console.log(res.data)
            	this.setState({
                	utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
		})
            })
        }  
    userList(){
        return this.state.utilisateurs.map(utilCourant =>{
            return <GenListe utilisateur={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant._id}/>;
        })

    }
    render(){
return (
    <div  className="container">
    <h3>Liste des motos</h3>
    <table className='table'>
        <thead className="thead-light">
            <tr>
                <th> Code</th>
                <th> Nom</th>
                <th> Prenom</th>
                <th> Departements</th>   
            </tr>
        </thead>
     <tbody>
       {this.userList()}         
</tbody>   
    </table>
  </div>
 
)        
    }
}


export default Liste;