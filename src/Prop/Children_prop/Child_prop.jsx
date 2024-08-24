



const CustomChild_prop=(props)=>{
    const{children,text}=props
    return(
<>
        <h5>Hi,This is {text}</h5>

       {children}
       </>
     )
}


export default CustomChild_prop