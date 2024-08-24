import { Children } from "react"
import style from "./greeting.module.css"





const CustomGreeting=(props)=>{
    const {children,text}=props
    return(
        <>
        <div className={style.card}>
        <h2>Hello,good Morning!,{text}</h2>

        <h4> {children}</h4>
        </div>   
        <div className={style.c}>
            <h5>Hello</h5>
        </div>
        </>
        
         )
}
export default CustomGreeting

