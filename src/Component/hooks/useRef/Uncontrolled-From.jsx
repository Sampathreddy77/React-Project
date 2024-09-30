import axios from "axios";
import React, { useRef, useState } from "react";



const Uncontrolled_Form = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [formErrors, setFormErrors] = useState({});

  const OnSubmit = (event) => {
    event.preventDefault();
    const usernameEntered = usernameRef.current.value;
    const passwordEntered = passwordRef.current.value;

    const FormErrors = validations(usernameEntered, passwordEntered);
    setFormErrors(FormErrors);

    if (Object.keys(FormErrors).length > 0) {
      console.log(FormErrors);
    } else {
      //call Api
      console.log("Submitted");
      loginApi(usernameEntered, passwordEntered);
    }
  };

  const validations = (username, password) => {
    const FormErrors = {};

    if (!username) {
      FormErrors.usernameError = "Please Enter Username";
      console.log("hello");
    } else if (username.length > 20) {
      FormErrors.usernameError = "Please enter the characters less than 20";
    }
    if (!password) {
      FormErrors.passwordError = "Please enter password";
    } else if (password.length >= 16) {
      FormErrors.passwordError = "Please enter the characters less than 16 ";
    }
    return FormErrors;
  };

  const loginApi = async (username, password) => {
    // console.log(username,password)
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      })
    if(response.status===200){
      alert("Login in successful")
    }
    else{
      alert("Login Failed")
    }
    }
      // console.log(response)
     catch (error) {
      console.log(error);
    }
   
  };

  return (
    <>
      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={usernameRef}
          />
          <span style={{ color: "red" }}>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input className="form-control" id="pwd" type="password" ref={passwordRef} />
          <span style={{ color: "red" }}>{formErrors?.passwordError}</span>
        </div>

        <button
          type="submit"
          className="btn btn-default"
          style={{ color: "red" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Uncontrolled_Form;
