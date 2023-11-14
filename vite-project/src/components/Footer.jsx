import React from "react";
import Typed from "react-typed";
const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      <div>
        <p>Come and joins us to help</p>
        <Typed
          strings={["dogs", "cats", "birds"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </footer>
  );
};

export default Footer;
