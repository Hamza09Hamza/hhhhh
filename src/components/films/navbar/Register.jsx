import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './Input';
class Register extends Component {
    state = { 
        account: {Username:'', Password:'',Name:''},
        errors:{},
        activebtn:true
     } 
     
     AbortEarly={
         abortEarly:false
    }
     schema={
        Username: Joi.string().required().email().label('Username'),
        Password: Joi.string().min(3).max(10).required().label('Password'),
        Name: Joi.string().min(2).required().label('Name')
     }
     ValidateEachProprety=(Target)=>{
        const {error}=Joi.validate(Target.value,this.schema[Target.name])
        return error ? error.details[0].message :null;
        
     }
     Validate=()=>{
        const AbortEarly=this.AbortEarly
        const {error} = Joi.validate(this.state.account,this.schema,AbortEarly)
       
        if (!error) return null
        const errors={}
        for(let item of error.details){
            errors[item.path[0]]=item.message
        }
        return errors
    }
     
     HandleSubmit=()=>{
        const errors = this.Validate()
        if (errors) return;
     }
     HandleChange=(e)=>{
        const currentTarget=e.target
        let errors={...this.state.errors}
        const newerrors=this.ValidateEachProprety(currentTarget)
        if(newerrors) errors[currentTarget.name]=newerrors
        else delete errors[currentTarget.name]
        const account= {...this.state.account}
        account[currentTarget.name]=currentTarget.value
        this.setState({account , errors})
        this.activefcn()
     }
     activefcn=()=>{
       const listerrors= this.state.errors
       
        if(Object.keys(listerrors).length===0  && this.state.account.Username!==''&& this.state.account.Password!==''){
            this.setState({activebtn: false})
        }else  {return null} 
     }
    render() {        

       
        return <div>
            <Input 
            value={this.state.account.Username} 
            onChange={this.HandleChange} 
            Id='Username'
            name='Username'
            type='email'
            label='Username'
            error={this.state.errors['Username']}
            validate={this.Validate}
                 ></Input> 
                 
            <Input 
            validate={this.Validate}
            value={this.state.account.Password} 
            onChange={this.HandleChange} 
            Id='Password' 
            name='Password'  
            type='password' 
            label='Password'
            error={this.state.errors['Password']}
            ></Input>
            <Input 
            value={this.state.account.Name} 
            onChange={this.HandleChange} 
            Id='Name'
            name='Name'
            type='text'
            label='Name'
            error={this.state.errors['Name']}
            validate={this.Validate}
                 ></Input> 
                 

            <button onClick={this.HandleSubmit}
            disabled={this.state.activebtn}
             className='btn btn-primary'>Submit</button>
        </div> ;
    }
}
 
export default Register;