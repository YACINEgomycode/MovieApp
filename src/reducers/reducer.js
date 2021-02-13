import {ADD} from "../action/actionTypes"
import {FILTER} from "../action/actionTypes"
import {STARS} from "../action/actionTypes"
import{ connect } from "react-redux"

const initialstate={
    arr : [
        {
    
      title: 'spiderman',
      rating:2,
      image: "https://i.pinimg.com/236x/9f/d6/f2/9fd6f2e951f876e4da29e968b9cc6c68.jpg",
      year:1990
        },
        {
    
            title: 'fdghj',
            rating: 3,
            image: "https://i.pinimg.com/236x/9f/d6/f2/9fd6f2e951f876e4da29e968b9cc6c68.jpg",
            year:2000
              }
    ],
    filterbyname:'',
    rate:1
   
}

export default function Ajouter(state=initialstate,action){
    switch(action.type)
    {
        case ADD:
            
            return Object.assign({},state,{
               arr:state.arr.concat(action.payload)})
        case FILTER :
            // return    {...state,arr:state.arr.filter((el)=>el.title.includes(action.payload))}
            return {...state,filterbyname:action.payload}

        case STARS:
            return {...state,rate:action.payload}
        default:
            return state
    }
}