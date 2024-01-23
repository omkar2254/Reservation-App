import React from 'react'
import "./Home.css"
import Navbar from "../../Components/navbar/Navbar"
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'
import PropertyList from '../../Components/propertyList/PropertyList'
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties'
import MailList from '../../Components/mailList/MailList'
// import PropertyList from '../../Components/propertyList/propertyList'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        {/* <Featured/> */}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
    </div>
  )
}

export default Home
