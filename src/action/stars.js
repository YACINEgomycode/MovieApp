
import {STARS} from "./actionTypes"

export function Star(payload){
    return{
        type: STARS,
        payload
    }
}