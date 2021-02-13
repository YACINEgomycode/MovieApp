import {ADD} from "./actionTypes"

export function add(payload){
    return{
        type: ADD,
        payload
    }
}

