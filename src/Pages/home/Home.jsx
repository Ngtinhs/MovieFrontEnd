import { AcUnit } from "@material-ui/icons"
import "./home.scss"
import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"

const Home = ({type}) => {
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>

    </div>
  )
}

export default Home