import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const  CustomToast=()=>{
  const Click=()=>{
    toast.success("Success",{
      position:"top-center"
    })
    toast.error("Error!",{
      position:"top-left"
    })
    toast.warn("Warning!",{
      position:"top-right"

    })

    
  }
  

  return (
    <div>
      <button onClick={Click}>Click!</button>
      <ToastContainer />
    </div>
  );
}
export default CustomToast