



const LoginComponent=(props)=>{
    const{isAdmin=false}=props
    return(
<div>
    {/*   */}
    
        {/* <h3>Welcome{isAdmin?"User":"Admin"}</h3> */}
        {
            isAdmin && <h4>Welcome Admin</h4>
        }
    
</div>
    )
}
export default LoginComponent