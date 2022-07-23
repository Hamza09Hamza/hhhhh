import React, { Component } from 'react';
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
class Paginationfilms extends Component {
  
    render() { 
       
        const numberofPages=(this.props.numberOfPages/this.props.pageSize) +1
        const pagesin=Array.from({length: numberofPages}, (_, i) => i + 1)
        if(pagesin===1){
            return null
        }
        return (
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pagesin.map((page) =>(
                    <li key={page}  className="page-item">
                        <a className ="page-link" onClick={()=>this.props.OnChangePage(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
          </nav>
          
        );
    }
}
 
export default Paginationfilms;