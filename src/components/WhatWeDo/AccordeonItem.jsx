import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordeonItem = ({ solution }) => {
  const { name, text } = solution;
  const [active, setActive] = useState(false);
  const nameRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.maxHeight = active
      ? `${textRef.current.scrollHeight}px`
      : "0px";

    nameRef.current.style.color = active ? "#bae401" : "";
    nameRef.current.style.borderBottom = active ? "none" : "";
    // nameRef.current.style.marginBottom = active ? "50px" : "50px";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <li>
      <h4 ref={nameRef} onClick={toogleActive}>
        {name}
        <span className={active ? "accToggle active" : "accToggle"}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </h4>
      <div ref={textRef}>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default AccordeonItem;
