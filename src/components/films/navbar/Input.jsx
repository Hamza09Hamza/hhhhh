import React, { Component } from 'react';
class Input extends Component {
    state = {  } 
    render() { 
        return<div className="mb-3">
    <label value={this.props.value} htmlFor={this.props.Id} className="form-label">{this.props.label}</label>
    <input type={this.props.type}  onChange= {this.props.onChange}  className="form-control" id={this.props.Id} name={this.props.name} />
   {this.props.error && <div className="alert alert-danger alertclass">{this.props.error}</div>}
  </div>

        
    }
}
 
export default Input;