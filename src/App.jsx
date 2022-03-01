import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Contact />
      <Experiences />
      <Services />
      <Portofolio />
    </>
  );
};

export default App;
