import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserDetails } from '../navigation/navigation-stack';


const JewellerScreen=()=> {
  const {Username}=useContext(UserDetails)

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
      <h3>hey {Username}, Welcome to Jewelry Screen</h3>
      {
        data.map(each=><>
        <pre>{JSON.stringify(each)}</pre>
        </>)
      }
    </div>
  )
}

export default JewellerScreen
