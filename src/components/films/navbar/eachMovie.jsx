import React, { Component } from 'react';
class EachMovie extends Component {
    onDownload=()=>{
this.props.history.push("/Movies")
    }
    render() { 
        return <div>
            <h1> {this.props.match.params.id}</h1>
            <button className='btn btn-sm btn-primary' onClick={this.onDownload}>Download</button>
        </div>;
    }
}
 
export default EachMovie;