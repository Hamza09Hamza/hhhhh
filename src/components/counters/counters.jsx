import React, { Component } from 'react';
import Counter from '../counters/counter';
class Counters extends Component {
    state = {
        counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        ]
    }
    handlerise=(Counterid)=>{
        const search = obj => obj.id === Counterid 
        const Index= this.state.counters.findIndex(search)
        this.state.counters[Index].value++
        const counters=this.state.counters
        this.setState({counters})
    }
    handleless=(Counterid)=>{
        const search = obj => obj.id === Counterid 
        const Index= this.state.counters.findIndex(search)
        if(this.state.counters[Index].value===0){
           return null
        }else{
        this.state.counters[Index].value--
        }
        const counters=this.state.counters
        this.setState({counters})
    }
    handledelelete=(Counterid)=>{
       const counters= this.state.counters.filter(counter =>counter.id!==Counterid )
       this.setState({counters})
    }
    render() { 
        
        return (
        <div>
           {this.state.counters.map( counter => <Counter 
           onDecrease={this.handleless} 
           onDelete={this.handledelelete} 
           onRise={this.handlerise} 
           key={counter.id} 
           id={counter.id} 
           value={counter.value}/>)}
        </div>);
    }
}
 
export default Counters;