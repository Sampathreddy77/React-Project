import { Component, PureComponent } from "react";





 export default class ChildComponent extends PureComponent{
    render(){

        console.log("Child triggered")
        return(
            <>
               <h3>I am Child</h3>
            
            </>
        )
    }
}