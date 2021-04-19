import React from 'react';
import axios from 'axios';

class AjoutDeux extends React.Component{
    constructor(props){
        super(props);
      
        this.state={
            code:'',
            nom:'',
            prenom: ''
        }
       
        this.onChangeCode= this.onChangeCode.bind(this);
        this.onChangeNom= this.onChangeNom.bind(this);
        this.onChangePrenom= this.onChangePrenom.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    
        onChangeCode(e){
            this.setState({
                code:e.target.value
            })
        }
        onChangeNom(e){
            this.setState({
                nom:e.target.value
            })
        }
        onChangePrenom(e){
            this.setState({
                prenom:e.target.value
            })
        }
       

        onSubmit(e){
            e.preventDefault();
            const util={
                code: this.state.code,
                nom: this.state.nom,
                prenom: this.state.prenom
            }
            console.log(util);
            axios.post('http://10.30.40.121:3435/ajoutUtil', util)
            .then(res=>console.log(res.data));
            this.setState({
                code:'',
                nom:'',
                prenom: ''
            })
        }
        
    
    render(){
return (
    <div  className="container">
    <h3> Ajouter une Voiture </h3>
    <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Nom de la voiture :</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.nom}
            onChange={this.onChangeNom}
            />
            </div>
            <div className="form-group">
            <label>modele de la voiture :</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.prenom}
            onChange={this.onChangePrenom}
            />
            </div>
            <div className="form-group">
            <label>Prix (HT):</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.code}
            onChange={this.onChangeCode}
            />
        </div>
        <div className="form-group">
            <input type="submit" value="Ajout" className="btn btn-primary"/>
        </div>    
   


    </form>
  </div>
)        
    }
}


export default AjoutDeux;