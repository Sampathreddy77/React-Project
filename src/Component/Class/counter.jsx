import { Component } from "react";
import { Error, success } from "../Toast/toast-helpers";



class CustomCounter extends Component {
    state={
count:0
    }
    IncrementHandler=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{

            success( `The Current Count ${this.state.count}`,"top-right")
        })
    }
    DecrementHandler=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            Error(`The Current Count${this.state.count}`,"top-left")
        })
    }

    render(){
        return(
            <>
            <h3>Count{this.state.count}</h3>
            <button onClick={this.IncrementHandler}>Increment</button>
            <button onClick={this.DecrementHandler}>Decrement</button>
            </>
        )
    }
}

export default CustomCounter