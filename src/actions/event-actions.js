import { ADD_EVENT, FETCH_EVENT, DELETE_EVENT } from "./action-constant";
let nextId=1
export const addEvent=(title,description,start,end)=>{
    nextId++;
    return {
        type:ADD_EVENT,
        payload:{
            id:nextId,
            title,
            description,
            start,
            end
        }
    }
}

export const fetchEvent=()=>{
    return {
        type:FETCH_EVENT,
        payload:{}
    }
}

export const deleteEvent=(id)=>{
    return {
        type:DELETE_EVENT,
        payload:{
            id
        }
    }
}