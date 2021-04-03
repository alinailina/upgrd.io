import React from "react";
import "./index.scss";
import img from "../../assets/placeholder2.jpg";
import { RiArrowRightLine } from "react-icons/ri";

const HowItWorks = () => {
  return (
    <section className="process">
      <div>
        <header>
          <h3>How it works</h3>
        </header>
        <ul>
          <li>
            <img src={img} alt="step1" />
            <h4>Upload photo</h4>
          </li>
          <li>
            <img src={img} alt="step2" />
            <h4>Customize your design</h4>
          </li>
          <li>
            <img src={img} alt="step3" />
            <h4>Shop products</h4>
          </li>
        </ul>
        <button>
          Start here <RiArrowRightLine />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
