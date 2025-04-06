import React from "react";
import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import HowWork from "./components/Tabs/HowWork";
import HowGet from "./components/Tabs/HowGet";
import OrderLaptop from "./components/Tabs/OrderLaptop";
import Question from "./components/Tabs/Question"; // Note the capital Q
import Cookie from "./components/CookiePolicy/Cookie";
import Video from "./components/Video";
import Form from "./components/Form/Form";
import Footer from "../src/components/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="AppContainer">
      <NavMenu />
      <HeroSection />
      <HowWork />
      <Video />
      <HowGet />
      <OrderLaptop />
      <Form />
      <Question />
      <Cookie />
      <Footer />
    </div>
  );
};

export default App;
