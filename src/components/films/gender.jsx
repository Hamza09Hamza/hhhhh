import React, { Component } from 'react';
class Gender extends Component {
   
    render() { 
        const genderlist=['AllGenders']
        this.props.movies.map(movie=>{
            if(genderlist.indexOf(movie.genre.name)===-1){
                genderlist.push(movie.genre.name)
            }  
            
    })
        return (<div>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {genderlist.map((gender) =>(
                    <li key={gender}  className="page-item">
                        <a className ="page-link" onClick={()=>this.props.OnChangeGender(gender)}>
                            {gender}
                        </a>
                    </li>
                )
                )}
            </ul>
          </nav>
        </div>);
    }
}
 
export default Gender;