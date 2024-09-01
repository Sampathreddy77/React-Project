import axios from "axios";



const CustomData=()=>{
class fetch_products extends Components{
    state={
        Products:[],
        Categories:[]
    }


    ComponentsDidMount(){
        this.FetchProducts()
        this.FetchCategories()
        
    }
    FetchProducts=async()=>{
        const{data,status}=await axios.get("https://fakestoreapi.com/products") 
        console.log(data)
        if(status===200){
            this.SetState({
                Products:data
            })
    }
   

    }

FetchCategories=async()=>{
    const{data,status}=await axios.get("https://fakestoreapi.com/products/categories")
    if(status===200){
        this.SetState({
            Categories:[...data,all]
        })
    }
}




}
}
export default CustomData