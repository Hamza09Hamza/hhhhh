import React, { Component } from 'react';
class Total extends Component {
    state = {  } 
    render() { 
        return (
            <div className='total-bar'>
                <span className='totalprice'>{this.props.payment}$</span>
                <button onClick={this.props.Onreset()} className='button-reset'> Reset</button>
                
            </div>
        );
    }
}
 
export default Total;