import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserDetails } from "../navigation/navigation-stack";

const ProductsDetailScreen = () => {
   const dynamicData= useParams()
   const [productData,setProductData]=useState({})
   const {Username}=useContext(UserDetails)


   useEffect(()=>{
    fetchData()
    console.log('hello');
    
   },[dynamicData])

   const fetchData=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${dynamicData.ProductId}`)
if(response.status===200){
    setProductData(response.data)
}
   }
  return (
    <div>
      <h3>hey {Username} ,You are viewing Product details Screen</h3>
{
    Object.keys(productData).length>0 &&
    <>
    
    <div className="card" style={{ width: "30rem" }}>
  <img src={productData.image} className="card-img-top" alt="Image" />
  <div className="card-body">
    <h2 className="card-title" text>{productData.title}</h2>
    <h3 className="card-title">{productData.category}</h3>
    <p className="card-text">{productData.description}</p>
    <p className="card-text price text-danger">Price: ${productData.price}</p>

  </div>
</div>

    
    </>
}

    </div>
  );
};

export default ProductsDetailScreen;
