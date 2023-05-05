import React, { useEffect } from 'react'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import Todoinput from './Todoinput'

import { todoRequestAction, todoFailureAction, todoSuccessAction } from "../redux/action";

const Todolist = () => {
  var todo= useSelector((store)=>{
   
    return store.todos;
    
  })
 console.log(todo);
   
   const dispatch= useDispatch()
  const getData= ()=>{
    // action request 
    dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
      
      console.log(res.data);//dispatch success request 
      dispatch(todoSuccessAction(res.data))
    })
    .catch((err)=>{
    //dispatch Failure Request
    dispatch(todoFailureAction())
      
    })
  }
  useEffect(()=>{
    getData();
  },[todo])
  return (
    <div>
       <Todoinput/>
    { todo.length>0 &&todo.map((el)=>{
      return <div key={el.id}>
      {el.title}---{el.status?"complete":"pending"}
    </div>
    })}
    
    </div>
  );
};

export default Todolist


