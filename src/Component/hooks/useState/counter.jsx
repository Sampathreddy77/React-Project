import React,{useState} from "react"



const Counter =()=>{
    const[age,setAge]=useState(10)


const ageHandler=(type)=>{
    switch (type) {
        case "INCREMENT":
            setAge(age+1)
            break;
    case "DECREMENT":{
        if (age>0) {
            setAge(age-1)
        }
        else
        alert("Age Can't be negative")
    break
    }
    case "RESET":{
        setAge(0)
    }
        default:
            break;
    }

}


    return(
<>
<h3>Counter Example</h3>

<h3>current age{age}</h3>
<button onClick={()=>ageHandler("INCREMENT")}>Increment</button>
<button onClick={()=>ageHandler("DECREMENT")}>Decrement</button>
<button onClick={()=>ageHandler("RESET")}>Reset</button>

</>


    )
} 
export default Counter