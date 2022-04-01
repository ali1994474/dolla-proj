import React, { useState } from "react";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Services from "../Services";
import Footer from "../Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle} />
      <Navbar toogle={toogle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
