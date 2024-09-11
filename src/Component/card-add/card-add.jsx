import { Component } from "react";
import CustomCard from "../Bootstrap/card";
import { Button } from "react-bootstrap";

class CardAddition extends Component {
  state = {
    EmployeeData: [
      {
        name: "Ram",
        salary: 25000,
        location: "Hyderabad",
      },
      {
        name: "Hanuman",
        salary: 26000,
        location: "Warangal",
      },
    ],
  };
  ClickHandler = () => {
    const newData = { name: "Sravan", salary: 20000, location: "Ameerpet" };
    const UpdatedData = [...this.state.EmployeeData, newData];
    this.setState({
      EmployeeData: UpdatedData,
    });
  };
  removeHandler = (index) => {
    const FilterData = this.state.EmployeeData.filter((_, id) => id !== index);
    this.setState({
      EmployeeData: FilterData,
    });
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            {this.state.EmployeeData.map((eachEmployee, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <CustomCard
                    title={eachEmployee.name}
                    location={eachEmployee.location}
                    text={eachEmployee.salary}
                    ind={index}
                    removeHandler={() => this.removeHandler(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Button variant="primary" onClick={this.ClickHandler}>
          Add Card
        </Button>
      </>
    );
  }
}
export default CardAddition;
