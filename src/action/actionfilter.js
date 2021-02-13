import {FILTER} from "./actionTypes"

export function Filter(payload){
    return{
        type: FILTER,
        payload
    }
}