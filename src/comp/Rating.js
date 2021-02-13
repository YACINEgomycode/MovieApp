import React from 'react'
import{ connect } from "react-redux"
import {Star} from "../action/stars"
const Rating = ({count, Star}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span onClick={() => Star(i+1)} key={i}>★</span>)
        }
        else {
            starsHtml.push(<span onClick={() => Star(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

const mapStateToProps= state =>{
    console.log(state.arr)
    return{
      rate:state.rate
    }
  }

  const mapDispatchToProps= dispatch =>{
    return{
      Star:(payload)=>{dispatch(Star(payload))}
      
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Rating);