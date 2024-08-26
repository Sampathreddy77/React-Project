import _default from "react-bootstrap/esm/Card"
import { DNA } from "react-loader-spinner"



const CustomDNALoader=(props)=>{
    return(
        <DNA
  visible={true}
//   height="80"
//   width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  {...props}
  />
    )
}
export default CustomDNALoader