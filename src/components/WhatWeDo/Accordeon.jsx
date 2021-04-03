import React from "react";
import AccordeonItem from "./AccordeonItem";

const Accordeon = ({ solutions }) => {
  return (
    <ul className="accordeon">
      {solutions.map((solution, i) => {
        return <AccordeonItem key={i} solution={solution} />;
      })}
    </ul>
  );
};

export default Accordeon;
