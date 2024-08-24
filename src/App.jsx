import React, { Children } from "react"
import CustomGeneral from "./Prop/General-prop"
import CustomChild_prop from "./Prop/Children_prop/Child_prop"
import CustomList from "./Component/List/list"
import CustomSpin from "./Component/Loader/color_spin"
import CustomToast from "./Component/Toast/toast"
import LoginComponent from "./Prop/Children_prop/login"
import CustomButton from "./Component/button/button"
import CustomGreeting from "./Component/Greeting/greeting"
import CustomCard from "./Component/Bootstrap/card"
import { EmployeeDetails } from "./Component/data/employee data"
import { FirstComponent } from "./Component/Bootstrap/first-component"





function App() {

  return (

    <>
   {/* <CustomGeneral text="Raju"/>  
    <CustomGeneral text="Rahul"/>
    <CustomGeneral text="Rajesh">
      From Srikakulam
    </CustomGeneral>
   <CustomChild_prop text="welcome">
    from hyderabad
   </CustomChild_prop>
   <CustomChild_prop/>
<CustomList/>
<CustomSpin/>

<LoginComponent isAdmin={false}/>
<LoginComponent isAdmin={true}/>
<CustomButton/>
<CustomGreeting text="Sampath"/>
<CustomGreeting>
  how r u?
</CustomGreeting>
<CustomToast /> */}
{/* <CustomCard text={"Software Developer"} title={"Sampath"}/>
<CustomCard text={"React Developer"} title={"Raju"}/> */}
{/* <CustomCard /> */}



  {/* {
  EmployeeDetails.map(each=>{
    return(
      <>
      <CustomCard title={each.name} text={each.designation} location={each.location} />
      </>
    )

  })
} */}
<FirstComponent/>


</>
  )
}

export default App

