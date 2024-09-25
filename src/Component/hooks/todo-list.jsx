import React, { useState } from "react"
import { createTodoList } from "./jsHelpers"




const CustomTodo=()=>{
    const[todo,setTodo]=useState(createTodoList())



  const addTodoHandler=()=>{
    const currentLength=todo.length
    const myObject={
        id:currentLength+1,
        text:`Item ${currentLength+1}`
    }
    setTodo([...todo,myObject])
    }

const deleteHandler=(targetid)=>{
    const filteredItems=todo.filter(eachTodo=>eachTodo.id!=targetid)
    setTodo(filteredItems)

}

return(
<>
    <h4>Todo List</h4>
    <button onClick={addTodoHandler}>Add Todo</button>
<ol>
{
 
    todo.map(eachTodo=>{
        return(
            <React.Fragment key={eachTodo.id}>
         <li>
                {eachTodo.text}
                
                </li> 
           <button onClick={()=>deleteHandler(eachTodo.id)}>
            Delete
           </button>      
           </React.Fragment>
        )
    
    })
  
}
</ol>
</> 
)
}
export default CustomTodo