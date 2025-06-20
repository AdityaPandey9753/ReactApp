import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Highlited from "./components/Highlited";
import InsightTabs from "./components/InsigthTabs";
import Testimonial from "./components/Testimonial";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="font-poppins font-normal">
      <Navigation />
      <HeroSection />
      <Highlited />
      <InsightTabs />
      <Testimonial />
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
