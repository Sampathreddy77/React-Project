import React from "react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("UseEffect triggered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const endPoints = "products";
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/${endPoints}`
    );
    if (status === 200) {
      setData(data);
    }
  };

  return (
    <>
      <h2>UseEffect</h2>
      <table style={{ border: "2px solid black" }}>
        <tbody>
          {data.map((each, ind) => (
            <React.Fragment key={ind}>
              <tr key={ind}>
                {[
                  each.id,
                  each.category,
                  each.description,
                  each.price,
                  each.image,
                ].map((item, i) => (
                  <>
                    <td style={{ border: "1px solid black" }} key={i}>
                      {i === 4 ? (
                        <img
                          src={item}
                          style={{ width: "100px", height: "100px" }}
                        />
                      ) : (
                        item
                      )}
                    </td>
                  </>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};



 
export default UseEffectExample;
