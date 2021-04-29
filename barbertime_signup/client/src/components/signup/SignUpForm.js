import React from "react";
import { Button, TextField } from "@material-ui/core";
import "../../styles/signup.css";
import logo from "../../assets/barber_time_logo.png";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask
}) => {
  return (
    <div className="box">
      <img className="logo" alt="Barber Time Logo" src={logo}/>
      <p>It's free. Only a minute to complete.</p>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit} autoComplete="off">
        
        <TextField
          name="name"
          label="Full Name"
          onChange={onChange}
          value={user.name}
          helperText={errors.name}
          error={errors.name != null ? true:false}
        />

        <br />

        <TextField
          name="email"
          label="Email"
          onChange={onChange}
          value={user.email}
          helperText={errors.email}
          error={errors.email != null ? true:false}
        />

        <br />

        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={onChange}
          value={user.password}
          helperText={errors.password}
          error={errors.password != null ? true:false}
        />

        <br />

        <TextField
          name="pwconfirm"
          label="Confirm Password"
          type="password"
          onChange={onChange}
          value={user.pwconfirm}
          helperText={errors.pwconfirm}
          error={errors.pwconfirm != null ? true:false}
        />

        <br />

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          label="submit"
          value="Submit"
        >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
