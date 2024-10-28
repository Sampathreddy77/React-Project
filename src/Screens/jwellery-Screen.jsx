import axios from 'axios';
import React, { useEffect, useState } from 'react'


const JewellerScreen=()=> {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await axios.get(
"https://fakestoreapi.com/products/category/jewelery"  );
  
      if (response.status === 200) {
        setData(response.data);
      }
    };

  return (
    <div>
      <h3> Welcome to JewellerScreen</h3>
      {
        data.map(each=><>
        <pre>{JSON.stringify(each)}</pre>
        </>)
      }
    </div>
  )
}

export default JewellerScreen
