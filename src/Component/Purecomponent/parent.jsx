import { Component } from "react";
import ChildComponent from "./child";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      isIndian: false,
    };
  }


  changeCountryShip = () => {
    this.setState({
      isIndian: !this.state.isIndian,
    });
  };



  render(){
    const { isIndian } = this.state;
    console.log("Parent triggered..........");
    
    return (
      <>
        <h3>Hello</h3>
        <h4>{isIndian ? "Happy Republic Day": "Go back to Indian"}</h4>
        <button onClick={this.changeCountryShip}>changeCountryShip</button>
        <ChildComponent/>
      </>
    );
  }
}
export default ParentComponent;
