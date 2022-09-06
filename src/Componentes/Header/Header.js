import React from 'react'
import logo1 from "../../assets/logopng.png"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Header.css"
import Navbar from '../Navbar/Navbar';

const Header = () => {

  return (

     <header>
    
    <img src={logo1}/>
    <h1>Warholiana</h1>
    <Navbar />
    <ShoppingCartCheckoutIcon sx={{ color:"#ffffff" }} fontSize="large" />

    </header>
    

  
  )
}

export default Header