import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/home-screen";
import AboutScreen from "../Screens/about-Screen";
import Navbar from "../Component/navbar/navbar";
import InvalidScreen from "../Screens/Invalid-screen";





const NavigationStack = () => {
  return (
  
  <> 
   <Navbar/>
   {
    true ?
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/About" element={<AboutScreen/>}/>
        <Route path="/*" element={<InvalidScreen/>}/>
      </Routes>
      :
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      </Routes>

}
  </>
  );
};
export default NavigationStack

