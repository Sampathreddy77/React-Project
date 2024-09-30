



export const mobileValidation=(value)=>{
const mobileRegex=/^[6-9][0-9]{9}$/
let error= ""
if(!value){
    error="Please enter mobile number"
}
else if(!mobileRegex.test(value)){
    error="Please enter valid mobile number"
}
return error
};
