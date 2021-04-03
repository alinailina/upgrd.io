import React from "react";
import "./index.scss";
import { solutions } from "../../data";
import Accordeon from "./Accordeon";
import img from "../../assets/placeholder2.jpg";

const WhatWeDo = () => {
  return (
    <section className="solutions">
      <div>
        <header>
          <h3>We offer</h3>
        </header>
        <div>
          <Accordeon solutions={solutions} />
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
