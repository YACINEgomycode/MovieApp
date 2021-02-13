
import {add} from '../action/action'
import{ connect } from "react-redux"
import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


 class Addmovie extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             show:false,
            title:'',
            rating:0,
            image:'',
            year:''  

         }
     }
     handleClose=()=>{
         this.setState({show:!this.state.show})
     }

     handleChange=(e)=>{
         this.setState({
             [e.target.name]: e.target.value
         })
     }

    render() {
    
        return (
            <div>
                <Button variant="primary" onClick={this.handleClose}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" name="title" onChange={this.handleChange}></input>
            <input type="text" name="rating" onChange={this.handleChange}></input><br></br>
            <input type="text" name="year" onChange={this.handleChange}></input>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.handleClose(); this.props.add(this.state)}}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}


 
const mapDispatchToProps= dispatch =>{
    return{
      add:(payload)=>{dispatch(add(payload))}
      
    }
  }


  export default connect(null,mapDispatchToProps)(Addmovie);
