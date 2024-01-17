import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";

import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
