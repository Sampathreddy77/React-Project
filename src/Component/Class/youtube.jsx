import { Component } from "react";
import { FirstComponent } from "../Bootstrap/first-component";
import CustomCounter from "./counter";



class YoutubeButton extends Component{
state={
    isSubscribe:false,
    text1:"Subscribe",
    text2:"Subscribed"

}
Click=()=>{

this.setState({
    isSubscribe:!this.state.isSubscribe
},()=>{})
}


    render(){
        return(
            <>
            

            <button onClick={this.Click}>{this.state.isSubscribe?this.state.text2:this.state.text1 }</button>
            {
              this.state.isSubscribe?<div>
                <FirstComponent/>

              </div>:<div>
              <CustomCounter/>
                <h3>Please!,Do Subscribe</h3>
              </div>
            }

            </>
        )
    }
}
export default YoutubeButton