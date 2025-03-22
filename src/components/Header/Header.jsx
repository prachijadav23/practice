import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'

import { IoMdHome } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";







const Header = ({ab}) => {
  const nav = useNavigate()
  return (
    <div className='ab1' >
       <div className='logo'>
            <h1>BloomFlora</h1>
       </div>
       <div className='nav'>
        
        <li onClick={() => nav('/')}><IoMdHome size={20}/>Home </li>
        <li onClick={() => nav('/products')}><FaShoppingCart size={20}/>Products</li>
        <li onClick={() => nav('/about')}><IoIosInformationCircle size={20}/> About Us</li>
        <li onClick={() => nav('/contact')}><IoMdContact size={20}/>Contact Us</li>
       </div>
        
    </div>
  )
}

export default Header
