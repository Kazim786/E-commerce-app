import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '/Users/apple/E-Commerce/king-clothing/src/firebase/firebase.util.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '/Users/apple/E-Commerce/king-clothing/src/components/cart--dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '/Users/apple/E-Commerce/king-clothing/src/redux/user/user.selector.js';

import { ReactComponent as Logo } from '/Users/apple/E-Commerce/king-clothing/src/assets/king.svg';
// now logo will act as a component
import '/Users/apple/E-Commerce/king-clothing/src/components/header/header.style.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    {/* logo routes to home */}
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/Contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
        //The ternary operator is evaluating if there is a current user logged in then show the signout otherwise show sign in
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);