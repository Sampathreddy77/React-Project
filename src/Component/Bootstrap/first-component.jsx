import CustomCard from "./card";
import CardAddition from "../card-add/card-add";

export const FirstComponent = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="container mt-5">
        <div className="row" >
          <div className="col-sm-4" >
            {/* <CustomCard title={"Ram"} text={"React Dev"} /> */}

            
          </div>
        </div>
      </div>
    </>
  );
};
