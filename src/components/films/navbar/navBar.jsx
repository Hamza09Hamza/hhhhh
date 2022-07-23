import React, { Component } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { Route } from 'react-router-dom';
class NavBar extends Component {
    state = {  } 
    render() { 
        return <nav className='navbar'>
            <ul className='navbar'>
                <li className='navbar-items Home'><Link className='navbar-items Home' to='/Movies'>Villy</Link></li>
                <li className='navbar-items'><NavLink className='navbar-items' to='/Movies'>Movies</NavLink></li>
                <li className='navbar-items'><NavLink className='navbar-items' to='/Customers'>Customers</NavLink></li>
                <li className='navbar-items'><NavLink className='navbar-items' to='/FeedBack'>FeedBack</NavLink></li>
                <li className='navbar-items'><NavLink className='navbar-items' to='/Register'>register</NavLink></li>
                <li className='navbar-items'><NavLink className='navbar-items' to='/Login'>Login</NavLink></li>
            </ul>
        </nav>;
    }
}
 
export default NavBar;