import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart--dropdown/cart-dropdown.component'
import './header.style.scss'
import {ReactComponent as Logo} from '/Users/apple/E-Commerce/king-clothing/src/assets/king.svg'
const Header = ({ currentUser }) => (
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
        {
            currentUser ?(
            <div className= 'option' onClick= {() => auth.signOut()}>SIGN OUT</div>
):(
            <Link className= 'option' to= '/signin'> Sign in </Link>
)}
        <CartIcon />
        </div>
        <CartDropDown />
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header); 