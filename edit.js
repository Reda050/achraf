import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.onChangeCode= this.onChangeCode.bind(this);
        this.onChangeNom= this.onChangeNom.bind(this);
        this.onChangePrenom= this.onChangePrenom.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
      
        this.state={
            code:'',
            nom:'',
            prenom: ''
        }
    }    
        componentDidMount(){
           console.log(this.props.match.params.id)
           axios.get('http://10.30.40.121:3435/lireUtil/' +this.props.match.params.id)
           .then(response => {
               this.setState ({
                   code: response.data.code,
                   nom: response.data.nom,
                   prenom: response.data.prenom,
                   id :this.props.match.params.id
               })
             }) 
             .catch((error)    =>{
             console.log(error);
             })
             console.log(this.state.code);
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
            axios.put('http://10.30.40.121:3435/modifier/'+this.props.match.params.id, util)
            .then(res=>console.log(res.data));
            this.setState({
                code:'',
                nom:'',
                prenom: ''
            })

	var a = document.getElementById('liste');
	a.click();
        }
        
    
    render(){
return (
    <div  className="container">
    <h3> Editer un utilisateur</h3>
    <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Nom :</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.nom}
            onChange={this.onChangeNom}
            />
            </div>
            <div className="form-group">
            <label>Prenom :</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.prenom}
            onChange={this.onChangePrenom}
            />
            </div>
            <div className="form-group">
            <label>Code :</label>
            <input type="text"
            required
            className="form-control"
            value={this.state.code}
            onChange={this.onChangeCode}
            />
        </div>
        <div className="form-group">
            <input type="submit" value="Editer" className="btn btn-primary"/>
        </div>    
   


    </form>
  </div>
)        
    }
}


export default Edit;