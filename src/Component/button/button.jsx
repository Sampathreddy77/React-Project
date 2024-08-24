



const CustomButton=(prop)=>{
    const {text="button" ,OnPress=()=>{},bgColor="red"}=prop
    const buttonText="clickMe!"
    const buttonStyle={backgroundColor:"blue",color:"white"}
    return(
        <button style={buttonStyle} onClick={OnPress}>{text}</button>
    )
    
}
export default CustomButton