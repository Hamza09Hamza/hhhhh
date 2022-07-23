import React, { Component } from 'react';
class Counter extends Component {   
    render() { 
        return (
        <div className='item'>
            <h6 className='product-title'> {this.props.counter.Name}</h6>
            <span className='price'>
                {this.props.counter.Price}$
            </span>
            <span>{this.props.counter.count}</span>
            <button onClick={()=>this.props.OnRise(this.props.counter.id)} id={this.props.counter.id} className='increase-product product'> +</button>
            <button onClick={()=>this.props.OnDecrease(this.props.counter.id)} id={this.props.counter.id}  className='decrease-product product'> - </button>
            <button onClick={()=>this.props.OnDelete(this.props.counter.id)} id={this.props.counter.id} className='remove-product product'> Delete</button>
        </div>
            );
    }
}
 
export default Counter;