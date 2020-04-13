import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '/Users/apple/E-Commerce/king-clothing/src/assets/carrt.svg'

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className= 'cart-icon' onClick= {toggleCartHidden}>
        <ShoppingIcon className= 'shopping-icon' />
        <span className= 'item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps)
    (CartIcon)