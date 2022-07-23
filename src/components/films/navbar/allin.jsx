import React, { Component } from 'react';
import { Route ,Switch,Redirect} from 'react-router-dom';
import NavBar from './navBar';
import FeedBack from './FeedBack';
import Films from './Movies';
import Customers from './Customers';
import NotFound from './notFound';
import EachMovie from './eachMovie';
import Login from './Login';
import Register from './Register';
import New from './New';
class Allin extends Component {
    
    render() { 
        return (
        <div>
            <NavBar />
            <Switch>
                <Route  path="/Movies/New" component={New}/>
                <Route path='/Movies/:id'exact component={EachMovie}/>
                <Route path='/' exact component={Films}/>
                <Route path='/notFound' component={NotFound}></Route>
                <Route path='/Movies' component={Films}/>
                <Route path='/Customers' component={Customers}/>
                <Route path='/FeedBack' component={FeedBack}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
                <Redirect to='/notFound'/>
            </Switch>
        </div>
            );
    }
}
 
export default Allin;