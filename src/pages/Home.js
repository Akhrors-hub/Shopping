import React from "react"
import Navbar from "../components/Navbar"
import Ann from "../components/Ann"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"

const Home = ()=>{
  return (
    <div>

  <Ann />
  <Navbar/>
  <Slider />
<Categories />
<Products />
  </div>
  )
}
export default Home;
