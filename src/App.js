import React from "react";

// import Header from "./components/Header";
import Info from "./components/Info";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import Case from "./components/Case";
import Demos from "./components/Demos";

import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Info />
      <HowItWorks />
      <Products />
      <Case />
      <Demos />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
