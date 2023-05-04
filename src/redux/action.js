import { GET_TODO_FIALURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actiontype"

export const todoRequestAction = (payload)=>{
   return {
    type:GET_TODO_REQUEST, payload
};
}
export const todoFailureAction = ()=>{
   return {
    type:GET_TODO_FIALURE,
};
}

export const todoSuccessAction = ()=>{
   return {
    type:GET_TODO_SUCCESS
   };
};
