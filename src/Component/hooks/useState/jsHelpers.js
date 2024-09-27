





export const createTodoList=()=>{
    const todo=[]
    for(let i=1;i<=10;i++){
        const myObject={
            id:i,
                text:`item ${i}`,
                
        }
        todo.push(myObject)
    
        
    }
    return todo
}

console.log(createTodoList());
