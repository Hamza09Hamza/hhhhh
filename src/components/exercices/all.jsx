import React, { Component } from 'react';
import Counters from './counters'
import Total from './payment';
class Allin extends Component {
   state={
    payment:0,
    counters:
    [
    {
            id:1,
            Name:"apple",
            count:0,
            Price: 120.00
     },
     {
            id:2,
            Name:"microsoft",
            Price: 200.00,
            count:0 
     },
     {
            id:3,
            Name:"amazon",
            Price: 100.00,
            count:0
     },
     {
            id:4,
            Name:"netflix",
            Price: 80.00,
            count:0
     }
    ]
    }
    handleincrease=(counterid)=>{
        const search = obj => obj.id === counterid 
        const index= this.state.counters.findIndex(search)
        this.state.counters[index].count++
        this.state.payment=this.state.payment+this.state.counters[index].Price
        const counters=this.state.counters
        this.setState({counters:counters})
        this.setState({payment:this.state.payment})

    }
    
    handledecrease=(counterid)=>{
        
        const search = obj => obj.id === counterid 
        const Index= this.state.counters.findIndex(search)
        if(this.state.counters[Index].count===0){
            return null
        }
        this.state.counters[Index].count--
        this.state.payment=this.state.payment-this.state.counters[Index].Price
        const counters=this.state.counters
        this.setState({counters:counters})
        this.setState({payment:this.state.payment})
    }
    handledelelete=(Counterid)=>{
        const counters= this.state.counters.filter(counter =>counter.id!==Counterid )
        this.setState({counters})
    }
    handlereset= ()=>{
        this.state.payment=0
        this.state.counters.forEach((counter)=>{
            counter.count=0
            
        })
        this.setState({counters:this.state.counters})
        this.setState({payment:0})
    }
       
    render() { 
        return (
            <div>
                <Counters 
                    counters={this.state.counters}
                    OnRise={()=>this.handleincrease}
                    OnDecrease={()=>this.handledecrease}
                    OnDelete={()=>this.handledelelete}/>
                <Total payment={this.state.payment} 
                    Onreset={()=>this.handlereset}/>
            </div>
        );
    }
}
 
export default Allin;