import { useNavigate } from "react-router-dom"





const InvalidScreen=()=>{
    const navigate=useNavigate()
    const handler=()=>{
navigate("/")
    }
    return(
        <>
<h3>Page Not Found 404 Error</h3>
<img src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error-1024x590.jpg" alt="" width={200}  height={150}/>
<br />
<br />
<button onClick={handler}>back to HomeScreen</button>
        </>

    )
}
export default InvalidScreen