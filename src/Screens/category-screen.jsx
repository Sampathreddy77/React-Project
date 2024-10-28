import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const categoryScreen = () => {
  return (
    <div>
      <h2>Welcome to categoryScreen</h2>
<Link to={"Jewellery"}>Jewellery</Link>
<Link to={"electronics"}>Electronics</Link>

      <Outlet/>
    </div>
  )
}

export default categoryScreen

