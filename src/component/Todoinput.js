import React from 'react'

const Todoinput = () => {
  const addTodoHandler= ()=>{};
  return (
    <div>
      <input type='number' placeholder='todo list'/>
     <button onClick={addTodoHandler}> Add</button>
    </div>
  )
}

export default Todoinput
