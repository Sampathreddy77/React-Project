import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectExample2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("UseEffectExample2");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setData(data.recipes);
        console.log(data.recipes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const headers = [
    "Name",
    "Cuisine",
    "Difficulty",
    "Ingredients",
    "Image",
    "Meal Type",
  ];

  return (
    <>
      <h4>useEffect Example</h4>
      <table border="1">
        <thead>
          <tr>
            {headers.map((each) => (
              <th style={{ border: "1px solid black" }} key={each}>
                {each}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((each, i) => (
            <tr key={i}>
              {[
                each.name,
                each.cuisine,
                each.difficulty,
                each.ingredients,
                each.image,
                each.mealType,
              ].map((item, id) => (
                <>
                  <td style={{ border: "1px solid black" }} key={id}>
                    {id === 4 ? (
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UseEffectExample2;
