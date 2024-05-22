import React from "react";
import img1 from "./component/images/logo-regular.png"
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import ElectricScooter from "./component/pages/ElectricScooter";
import Accessories from "./component/pages/Accessories"
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import ShopAll from "./component/pages/ShopAll";
import Home from "./component/pages/Home";
import Details from "./component/pages/Details";
import img6 from"../src/component/images/logo-footer.png"
import Footer from "./component/Footer";



const App = () => {
  return (
    <>
      <Navbar img={img1} />
      {/* <Banner img={img2}/> */}
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/ShopAll" element={<ShopAll />} />
        <Route path="/ElectricScooter" element={<ElectricScooter />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/:id" element={<Details />} />
      </Routes>

      <Footer img={img6}/>
    </>
  );
};

export default App;