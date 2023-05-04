import React, { useEffect } from 'react'
import axios from "axios"
import Todoinput from './Todoinput'
const Todolist = () => {
  const getData= ()=>{
    axios.get("http://localhost:8080/todos").then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
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
