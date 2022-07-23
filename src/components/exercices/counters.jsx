import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        return (
            <div className='product-bar'>
                {this.props.counters.map(counter=>(
                    <Counter key={counter.id}
                    counter={counter}
                    OnRise={this.props.OnRise()}
                    OnDecrease={this.props.OnDecrease()}
                    OnDelete={this.props.OnDelete()}
                   />
                ))}
            </div>
        );
    }
}
 
export default Counters;