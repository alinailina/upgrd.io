import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import Info from "./components/Info";
import HowItWorks from "./components/HowItWorks";

import Case from "./components/Case";
import Demos from "./components/Demos";

import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Info />
      <WhatWeDo />
      <HowItWorks />
      <Case />
      <Demos />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
