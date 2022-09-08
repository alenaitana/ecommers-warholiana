import React from 'react'
import logo1 from "../../assets/logopng.png"
import "./Header.css"
import Navbar from '../Navbar/Navbar';
import { Cartwidget } from '../CartWidget/Cartwidget';

const Header = () => {

return (

<header>
    
    <img src={logo1}/>
    <h1>Warholiana</h1>
    <Navbar />
    <Cartwidget />

</header>
    

)
}

export default Header