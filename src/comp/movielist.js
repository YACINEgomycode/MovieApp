import React from 'react'
import Rating from './Rating';
import{ connect } from "react-redux"

 function Movielist(props) {
    return (
        <div className="pic-box" >
            
            {props.arr.filter(el=>el.title.includes(props.filterbyname) && 
            el.rating >= props.rate ).map((el) =>(
                
                <div className="box">
               
              <div className="movie-image"style= {{backgroundImage:`url('${el.image}')`}}> 
              <div className="movie-rating"><Rating count={el.rating} /></div></div>
              <span className="desc">{el.title}-{el.year}</span>
            </div>
            
            
                ))}
        </div>
    )
}
const mapStateToProps= state =>{
    console.log(state.arr)
    return{
      arr: state.arr,
      filterbyname : state.filterbyname,
      rate:state.rate
    }
  }

  export default connect(mapStateToProps)(Movielist);