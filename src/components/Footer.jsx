import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="social">
          <li>
            <a href="/">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebookF />
            </a>
          </li>
        </ul>
        <p>
          © 2021 UPGRD Photos™ Part of Retouch Group Oy All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
