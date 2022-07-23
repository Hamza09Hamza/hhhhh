import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        Count:0
    } 
    render() { 
        return (
            <div className='counter'>
                <span>
                    {this.props.value}
                </span>
            <button onClick={()=>{this.props.onRise(this.props.id)}} className='button-rise'>  rise</button>
            <button onClick={()=>{this.props.onDelete(this.props.id)}} className="delete-button">Delete</button>
            <button  onClick={()=>{this.props.onDecrease(this.props.id)}} className='button-decrease'> Decrease</button>
            </div>
        );
    }
}
 
export default Counter;