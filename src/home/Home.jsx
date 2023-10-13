import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import  Footer from "../common/footer/Footer"
import  Horizontal  from "../carousel/Horizontal"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Horizontal />
      <Recent />
      <Awards /> 
      <Price />
      <Footer />
    </>
  )
}

export default Home
