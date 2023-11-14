import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";

const Login = () => {
  return (
    <div>
      <Navbar /> <br />
      <br /> <br />
      <br />
      <div className="mx-auto my-auto w-1/2">
        <Form />
      </div>
      <SignIn />
      <Footer />
    </div>
  );
};

export default Login;
