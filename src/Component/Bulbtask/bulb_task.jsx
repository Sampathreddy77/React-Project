import { Component } from "react"




class BulbTask extends Component{
    constructor(){
        super()
        this.state={
            IsBulb_On:false
            
        }
        console.log("Is bulb on  triggered...")
    }
    BulbTurnOn=()=>{
        // console.log("BulbTurnOn triggered...")
        this.setState({
            IsBulb_On:!this.state.IsBulb_On
        })
    }
  
    render(){
        // console.log("hi...")
        return(
            <>
            <div style={{display:"flex",justifyContent:"center",top:"50"}}>
                {this.state.IsBulb_On ? 
                (<img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="bulb_off"  width={200} height={250} />) 
                : (<img src="https://www.w3schools.com/js/pic_bulbon.gif" alt="bulb_on" width={200} height={250} />)}
            </div>
<button onClick={this.BulbTurnOn}>{this.state.IsBulb_On?"Bulb On":"Bulb Off"}</button>


            </>
        )
    }
}
export default BulbTask
