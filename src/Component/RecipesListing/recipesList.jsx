import { Component } from "react";
import CustomDNALoader from "../Loader/dna -loader";
import { CustomOrderList } from "../List/list";
import CustomHeading from "../Header/header";
import axios from "axios";





class RecipesListing extends Component {
  state = {
    recipes: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log("I am executed");
    //to call the server
    this.fetchData();
  }

  fetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");

    if (status === 200) {
      this.setState({
        recipes: data.recipes,
        loading: false,
      });
    }
  };
  // fetchData=async()=>{
  //     const data=await fetch("https://dummyjson.com/recipes")
  //     const {recipes}=await data.json()

  //     this.setState({
  //         recipes:recipes,
  //         loading:false

  //     })
  render() {
    return (
      <>
        {this.state.loading ? (
          <CustomDNALoader />
        ) : (
          <>
            <h3>Recipes</h3>
            {this.state.recipes.map((eachRecipe) => {
              return (
                <div key={eachRecipe.id}>
                  <h4>{eachRecipe.name}</h4>
                  <img src={eachRecipe.image} alt="" height={250} width={300} />
                  <CustomHeading
                    heading={`Ingredients for ${eachRecipe.name}`}
                  />
                  <CustomOrderList list={eachRecipe.ingredients} />
                  <CustomHeading
                    heading={`Instructions for ${eachRecipe.name}`}
                  />
                  <CustomOrderList list={eachRecipe.instructions} />
                </div>
              );
            })}
          </>
        )}
      </>
    );
  }
}

export default RecipesListing;
