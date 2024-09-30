import React, { useState } from "react";
import { mobileValidation } from "./mobilevalidation";

const ControlledForm = () => {
  const [model, setModel] = useState("");

  const [modelErr, setModelErr] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");

  const [mobileErr, setMobileErr] = useState("");

  const modelValidator = (value) => {
    let error = "";

    const modelRegex = /^samsung/i;
    if (!value) {
      error = "Please enter model name";
    } else if (!modelRegex.test(value)) {
      error = "Please enter proper Samsung Model";
    }
    return error;
  };

  const modelHandler = (event) => {
    const modelName = event.target.value;
    setModel(modelName);
    console.log(modelName)
    const error = modelValidator(modelName);

    if (error) {
      setModelErr(error);
    } else {
      setModelErr("");
    }
  };
  const mobileHandler = (event) => {
    const mobile = event.target.value;
    console.log(mobile)
    setMobileNumber(mobile);
    const error = mobileValidation(mobile);
    if (error) {
      setMobileErr(error);
    } else {
      setMobileErr("");
    }
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (modelErr || mobileErr) {
      alert("Please enter proper values");
    } else {
alert("Successfully Submitted")

    }
  };

  return (
    <>
      <h1>Samsung Complaint Form</h1>
      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label htmlFor="username">Model:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={model}
            onChange={modelHandler}
          />
          {modelErr && <span style={{ color: "red" }}>{modelErr}</span>}
          <br />
          <label htmlFor="username">Enter Your Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={mobileNumber}
            onChange={mobileHandler}
          />
        </div>
        {mobileErr && <span style={{ color: "red" }}>{mobileErr}</span>}
        <br />
        <button
          type="submit"
          className="btn btn-default"
          style={{ color: "red", backgroundColor: "blue" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default ControlledForm;
