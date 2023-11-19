import { Route, Routes } from "react-router-dom";

import About from "./screens/About/About";
import Skills from "./screens/Skills/Skills";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Main from "./screens/Main/Main";
const Router = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Router;
