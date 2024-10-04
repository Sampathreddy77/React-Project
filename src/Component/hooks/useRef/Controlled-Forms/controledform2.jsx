import { useState } from "react";
import { IndianStates } from "./info";
import TableComponent from "../../../Table/table";

const ControlledForm = () => {
  const InitialData = {
    model: "",
    mobileNumber: "",
    state: "",
  };

  const [formData, setFormData] = useState(InitialData);

  const [formErr, setFormErr] = useState({
    model: "",
    mobileErr: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const OnChangeHandler = (event) => {
    // const EnteredValue=event.target.value
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    switch (name) {
      case "model":
      // validations (model)
      case "mobileNumber":
      //mobileNum  Validations
    }
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmittedData([...submittedData, formData]);
    setFormData(InitialData);
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>Samsung Complaint Form</h1>
      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label htmlFor="username">Model:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="model"
            value={formData.model}
            onChange={OnChangeHandler}
          />
          {formErr.modelErr && (
            <span style={{ color: "red" }}>{formErr.modelErr}</span>
          )}
          <br />
          <label htmlFor="username">Enter Your Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={OnChangeHandler}
          />
          {formErr.mobileErr && (
            <span style={{ color: "red" }}>{formErr.mobileErr}</span>
          )}
        </div>

        <br />

        <select name="state" value={formData.state} onChange={OnChangeHandler}>
          {IndianStates.map((eachState) => {
            return <option value={eachState.name}>{eachState.name}</option>;
          })}
        </select>
        <br />

        <button
          type="submit"
          className="btn btn-default"
          style={{ color: "red", backgroundColor: "blue" }}
        >
          Submit
        </button>

        <TableComponent rowData={submittedData} />
      </form>
    </>
  );
};

export default ControlledForm;
