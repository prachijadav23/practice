import React from 'react'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
        <footer className="footer">

                <p>Copyright&copy;2025 by Google</p>
                <p>Prachi Jadav</p>
                <div className='icons'>
                    <a href=""><FaInstagram size={20} color='white'/></a>
                    <a href=""><CiFacebook size={20} color='white'/></a>
                    <a href=""><CiYoutube size={20} color='white'/>
                    </a>
                </div>
        </footer>
    </div>
   
  )
}

export default Footer;
