import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '/Users/apple/E-Commerce/king-clothing/src/assets/648px-Flag_of_the_Pakistani_Army.svg.png'
const Header = () => (
    <div className= 'header'>
        <Link className= 'logo-container' to= "/">
            <Logo className= 'logo' />
        </Link>
        <div className= 'options'>
        <Link className= 'option' to= "/shop">
            SHOP 
        </Link>
        <Link className= 'option' to= "/shop">
            CONTACT
        </Link>
        </div>
    </div>
)

export default Header 