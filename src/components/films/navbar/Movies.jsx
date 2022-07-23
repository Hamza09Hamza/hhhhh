import React, { Component } from 'react';
import Getmovies  from '../file';
import { Link } from 'react-router-dom';
import movies from '../file'
import { Route } from 'react-router-dom';
import _ from 'lodash'
import New from './New';
import Paginationfilms from '../pagination.jsx';
import pagination,{paginationgender} from '../renderingfilms'
import Gender from '../gender';

class Films extends Component {
    state={
        currentPage:1,
        pageSize:2,
        currentGender:'AllGenders',
        movies:Getmovies(),  
        count:Getmovies().length
    }
    
    handlePageChanging=(currentpagenumber)=>{
        
    this.setState({currentPage:currentpagenumber})
    }   
    Deletemovie=(id)=>{ 
        const movies=this.state.movies.filter( (m) => m._id!==id)
        this.setState({movies})
    }
    handleGenderChanging=(gender)=>{
        
        this.setState({currentGender:gender})
        this.setState({currentPage:1})
    }
    NewMovie=()=>{
        const movies=New.apply.HandleSubmit()
        this.setState({movies:movies})
        console.log(this.state.movies)
    }
      render() { 
       
        const gendermovies=paginationgender(this.state.movies,this.state.currentGender)
        const count= gendermovies.length
        const listmovies= pagination(this.state.pageSize,this.state.currentPage,gendermovies)
        
        
        return   (
      
        <div> 
            <div  id='table'>
                <h1> there is {this.state.movies.length}  in the database</h1>
                <Gender
                key={45}
                OnChangeGender={this.handleGenderChanging}
                movies={this.state.movies}
                />
               
                   <Link className='titlename' to ={"/Movies/New"} > <button  className="btn-primary btn-sm"> New Movie </button></Link>
                
                <table>
                    <thead>
                        < th className='title' > Title</ th >
                        < th className='nothing' >Genre</ th >
                        < th className='nothing' > stock</ th >
                        < th className='nothing' > Rate</ th >
                        < th className='nothing' ></th>
                        <th  className='nothing'></th>
                    </thead>
                    <tbody>
                    {listmovies.map( 
                        movie => <tr>
                            <td className='title'><Link className='titlename' to={"/Movies/".concat(movie._id)}>{movie.title}</Link></td>
                            <td className='nothing'> {movie.genre.name}</td>
                            <td className='nothing'>{movie.numberInStock}</td>
                            <td className='nothing'>{movie.dailyRentalRate}</td>
                            <td className='nothing'><button onClick={()=> this.Deletemovie(movie._id)} className='buttondelete btn btn-sm'> Delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <Paginationfilms
                numberOfPages={count}
                pageSize={this.state.pageSize}
                OnChangePage={this.handlePageChanging}
                />
        </div>
    </div>
        ) ;
    }
}
export default Films ;