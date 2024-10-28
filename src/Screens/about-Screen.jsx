import { useContext } from "react"
import { UserDetails } from "../navigation/navigation-stack"




const AboutScreen=()=>{
const {username,darkHandler,salary,salaryHandle}=useContext(UserDetails)

const ChangeHandler=()=>{
    darkHandler()
}
const SalaryHandler=()=>{
    salaryHandle()
}

    return(
<>
        <h2> Welcome to About Screen</h2>
        <h3>Hey {username},Your Salary is {salary}</h3>

<button onClick={ChangeHandler}>Change Theme</button>
<button onClick={SalaryHandler}>Change Salary</button>
</>
    )
}
export default AboutScreen