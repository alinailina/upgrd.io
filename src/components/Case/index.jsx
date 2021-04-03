import React from "react";
import "./index.scss";
import { BiPlay } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";

const Case = () => {
  return (
    <section className="case">
      <div>
        <header>
          <h3>Company case</h3>
        </header>
        <div>
          <BiPlay />
        </div>
        <button>
          Shop now <RiArrowRightLine />
        </button>
      </div>
    </section>
  );
};

export default Case;
