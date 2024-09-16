import axios, { Axios } from "axios";
import { Component } from "react";
import { baseURL_PROD } from "../url/app_url";


class FetchProducts extends Component {
  state = {
    products: [],
    categories: [],
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts = async () => {
    const { data, status } = await axios.get(
      `${baseURL_PROD}/products`
    );
console.log(baseURL_PROD)
    if (status === 200) {
      this.setState({
        products: data,
      });
    }
  };



  fetchCategories = async () => {
    const { data, status } = await axios.get(
      `${baseURL_PROD}/products/categories`
    );




    if (status === 200) {
      this.setState({
        categories: [...data,"all"]
      });
    }

  };




  CatSelectHandler=(selectedCategory)=>{ 
if(selectedCategory==="all"){
    this.fetchProducts()
}
else {
  this.fetchCategoryProducts(selectedCategory)
}





  }
  fetchCategoryProducts= async(selected)=>{
    const {data,status}= await axios.get (`${baseURL_PROD}/products/category/${selected}`)
    if(status===200){
        this.setState({
            products:data

        })
    }
  }





  render() {
    return (
      <>
        {this.state.categories.length > 0 && (
          <>
            {this.state.categories.map(each => {
              return (
                <button  onClick={()=>this.CatSelectHandler(each)} class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                  {each}
                </button>
              );
            })}
          </>
        )}
        {this.state.products.length > 0 && (
          <>
            {this.state.products.map((each) => {
              return (
                <>
                  <h2>{each.title}</h2>
                  <h5>{each.description}</h5>
                  <img src={each.image} alt="" width={200} height={200} />
                </>
              );
            })}
          </>
        )}
      </>
    );
  }
}
export default FetchProducts;
