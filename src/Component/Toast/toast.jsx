import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomToast(){
  const notify=()=>{
    toast.success("Success",{
      position:"top-center"
    })
    toast.error("Error!",{
      position:"top-left"
    })


  }
  
 

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
export default CustomToast