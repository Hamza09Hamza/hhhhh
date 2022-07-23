import _ from 'lodash'
function pagination(pageSize,currentPage,movies) {
    const StartIndex= (currentPage-1)*pageSize 
    return _(movies).slice(StartIndex).take(pageSize).value();   
}
export default pagination;
export function paginationgender(movies,genderwanted){
    if(genderwanted==='AllGenders'){
        return movies
    }else{
        
        const gendermovies= movies.filter((m) => (
            m.genre.name===genderwanted
        ))
        
        return gendermovies
    }
 }
 