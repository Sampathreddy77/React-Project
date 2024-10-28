import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/home-screen";
import AboutScreen from "../Screens/about-Screen";
import Navbar from "../Component/navbar/navbar";
import InvalidScreen from "../Screens/Invalid-screen";
import CategoryScreen from "../Screens/category-screen";
import JewellerScreen from "../Screens/jwellery-Screen";
import ElectronicsScreen from "../Screens/electronics-screen";
import ProductScreen from "../Screens/product-screen";
import ProductsDetailScreen from "../Screens/productDetails-Screen";

const NavigationStack = () => {
  return (
    <>
      <Navbar />
      {true ? (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />

          <Route path="category" element={<CategoryScreen />}>
            <Route index element={<ElectronicsScreen />} />
            <Route path="Jewellery" element={<JewellerScreen />} />
            <Route path="electronics" element={<ElectronicsScreen />} />
          </Route>
          <Route path="products" element={<ProductScreen />} />
          <Route
            path="products/:ProductId"
            element={<ProductsDetailScreen />}
          />

          <Route path="/*" element={<InvalidScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </>
  );
};
export default NavigationStack;
