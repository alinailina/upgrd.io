import React from "react";

import { BiCheck } from "react-icons/bi";

const Products = () => {
  return (
    <section id="products">
      <header>
        <h3>Our solutions</h3>
      </header>
      <div>
        <div>
          <h4>Fan art merchandize</h4>
          <ul>
            <li>
              {" "}
              <span>
                <BiCheck />
              </span>
              <p>Customizable Fan Art Merchandise Store for your fans</p>
            </li>
            <li>
              {" "}
              <span>
                <BiCheck />
              </span>
              <p>All in-one from cool print products to global shipping. </p>
            </li>
            <li>
              <span>
                <BiCheck />
              </span>
              <p>License fee kickback for Leagues / Teams.</p>
            </li>
          </ul>
          <button>Contact sales</button>
        </div>
        <div>
          <h4>Fan engagement</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button>Contact sales</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
