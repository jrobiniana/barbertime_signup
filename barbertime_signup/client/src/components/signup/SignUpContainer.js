import React, { useState } from "react";
import SignUpForm from "./SignUpForm.js";
import { useMutation } from '@apollo/client';
import validateSignUpForm from "./validate";
import CREATE_USER_MUTATION from "../queries/signup";
import { useHistory } from "react-router-dom";

function SignUpContainer() {
  const [user, setUser] = useState({name: "", email: "", password: "", pwconfirm: ""});
  const [errors, setErrors] = useState({ });
  const [createUser, { data }] = useMutation(CREATE_USER_MUTATION);
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submitSignup = user => {
    var params = { name: user.name, password: user.password, email: user.email };
    createUser({ variables: params })
      .then(({ data }) => {
        console.log(data);
        history.push("/confirm");
	  })
      .catch( e => {
        setErrors({message: "Email is already registered.", email: ""})
	  })
  }

  const validateForm = event => {
    event.preventDefault();
    var payload = validateSignUpForm(user);
    if (payload.success) {
      setErrors({});
      submitSignup(user);
    } else {
      const plerrors = payload.errors;
      setErrors(prevState => plerrors);
    };
  }

  return (
    <div>
      <SignUpForm
        onSubmit={validateForm}
        onChange={handleChange}
        errors={errors}
        user={user}
      />
    </div>
  );
}

export default SignUpContainer;
