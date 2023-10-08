import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import { useEffect } from "react";
import Footer from "./components/organs/Footer";
import Login from "./components/Login/Login";
import SignIn from "./components/SignIn/SignIn";
import BusinessSignUp from "./components/signup_business/signup";
import Footprint from "./components/Footprint/Footprint";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />
      {/* <Login /> */}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignIn/>} />
        <Route path="/BusinessSignUp" element={<BusinessSignUp/>} />
        <Route path="/footprint" element={<Footprint />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
