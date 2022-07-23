import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './Input';

import { movies } from './../file';
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class New extends Component {
    state = { 
        Movie: {Name:'', Number:'' ,Rate:'' , SelectedValue:'Action'},
        errors:{},
        activebtn:true
    };
     
     AbortEarly={
         abortEarly:false
    }
     genres={
        Action:{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        Thriller:{ _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        Comedy: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }

     }
     schema={
        Name: Joi.string().required().label('Name'),
        Number: Joi.number().min(3).max(100).required().label('Number'),
        Rate: Joi.number().min(1).max(10).required().label('Rate')
     }
     ValidateEachProprety=(Target)=>{
        const AbortEarly=this.AbortEarly
        const {error}=Joi.validate(Target.value,this.schema[Target.name], AbortEarly)
        return error ? error.details[0].message :null;
        
     }
     Validate=()=>{
        const AbortEarly=this.AbortEarly
        const {error} = Joi.validate(this.state.Movie,this.schema,AbortEarly)
       
        if (!error) return null
        const errors={}
        for(let item of error.details){
            errors[item.path[0]]=item.message
        }
        return errors
    }
    
     generateString =(length) =>{
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    
     HandleSubmit=()=>{
        let listmovie={...movies}
        const errors = this.Validate()
        if (errors) return;
        //caling the server
        const NewMovie={
            _id:this.generateString(24),
            title:this.state.Movie.Name,
            genre: this.genres[this.state.Movie.SelectedValue],
            numberInStock: this.state.Number,
            dailyRentalRate: this.state.Rate,
            publishDate: date
        }
        console.log(NewMovie)
        listmovie.push(NewMovie)
        return movies

     }
     HandleChange=(e)=>{
        const currentTarget=e.target
        let errors={...this.state.errors}
        const newerrors=this.ValidateEachProprety(currentTarget)
        if(newerrors) errors[currentTarget.name]=newerrors
        else delete errors[currentTarget.name]
        const Movie= {...this.state.Movie}
        this.setState({selectValue:e.target.value});
        Movie[currentTarget.name]=currentTarget.value
        this.setState({Movie , errors})
        this.activefcn()
     }
     activefcn=()=>{
       const listerrors= this.state.errors
       console.log(this.state)
       
        if(Object.keys(listerrors).length===0  && this.state.Movie.Name!==''&& this.state.Movie.Number!=='' && this.state.Movie.Rate!==''){
            this.setState({activebtn: false})
        }else  {return null} 
     }
    render() { 
        return <div>
            
                <h1> New Movie </h1>
            <Input
                value={this.state.Movie.Name}
                onChange={this.HandleChange}
                Id='Name'
                name='Name'
                type='text'
                label='Name'
                error={this.state.errors['Name']}
                validate={this.Validate}
            >
            </Input>
           <select className='genrechoice'
           value={this.state.Movie.SelectedValue} 
           onChange={this.handleChange}  >
            <option value={"Action"} >Action</option>
            <option value={"Comedy"} >Comedy</option>
            <option value={"Thriller"} >Thriller</option>
           </select>
        
        <Input
                value={this.state.Movie.Number}
                onChange={()=>this.HandleChange}
                Id='Number'
                name='Number'
                type='text'
                label='Number In Stock'
                error={this.state.errors['Number']}
                validate={this.Validate}
            >
            </Input>
            <Input
                value={this.state.Movie.Rate}
                onChange={()=>this.HandleChange}
                Id='Rate'
                name='Rate'
                type='text'
                label='Daily Rate '
                error={this.state.errors['Rate']}
                validate={this.Validate}
            >
            </Input>
            
            <button onClick={this.HandleSubmit}
            disabled={this.state.activebtn}
             className='btn btn-primary'>
                Submit
            </button>
            
        </div>

    }
}
 
export default New;