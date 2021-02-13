import React, { Component } from 'react'
import Movies from "./comp/movies"
import "./style.css"
import Rating from './comp/Rating';
import {connect} from "react-redux";
import {Filter} from './action/actionfilter';


class App extends Component {
 state = {
      search:""
    }
  
  handleChange=(e)=>{
    this.setState({
      search:e.target.value
    })}
  
  render () {
  return (
    <div className="App">
      <div className="search">
      <input type="text" onChange={this.handleChange}></input><span className="rate"><Rating/></span>  
      </div>
      <div className="film">
 <Movies/>
 </div>
 {this.props.Filter(this.state.search)}
    </div>
  );
}


}
const mapStateToProps= state =>{
  console.log(state.arr)
  return{
    arr: state.arr
  }
}

const mapDispatchToProps= dispatch =>{
  return{
    Filter:(payload)=>{dispatch(Filter(payload))}
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
