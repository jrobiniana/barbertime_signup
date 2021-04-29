import React from "react";
import "../../styles/signup.css";
import logo from "../../assets/barber_time_logo.png";

const PostSignUpPage = ({
  history,
}) => {
  return (
    <div className="box">
      <img className="logo" alt="Barber Time Logo" src={logo}/>
      <p>Great! Please check your email to activate your account.</p>

    </div>
  );
};

export default PostSignUpPage;
