import React, { useEffect } from 'react'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import Todoinput from './Todoinput'
// import { todoFailureAction, todoRequestAction, todoSuccessAction } from '../Redux/action';
import { todoRequestAction, todoFailureAction, todoSuccessAction } from "../redux/action";

const Todolist = () => {
  const todos= useSelector((store)=>{
    console.log(store);
    return store.todos || [];
  })
   const dispatch= useDispatch()
  const getData= ()=>{
    // action request 
    dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos").then((res)=>{
      console.log(res);
      //dispatch success request 
      dispatch(todoSuccessAction(res.data))
    })
    .catch((err)=>{
    //dispatch Failure Request
    dispatch(todoFailureAction())
      console.log(err);
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
       <Todoinput/>
    </div>
  )
}

export default Todolist
