import { Component } from "react";




class RecipesListing extends Component{

state



componentDidMount(){
    console.log("I am executed")
    //to call the server
    this.fetchData()
}
fetchData=async()=>{
    const data=await fetch("https://dummyjson.com/recipes")
    const finalData=data.json()


    console.log(finalData)

}
    render(){
        return(
            <>
            
            <h2>Recipes list</h2>
            
            </>
        )
}
}

export default RecipesListing