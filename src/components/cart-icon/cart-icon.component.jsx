import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '/Users/apple/E-Commerce/king-clothing/src/redux/cart/cart.action.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '/Users/apple/E-Commerce/king-clothing/src/assets/carrt.svg';
//cart icon will now be a component of react 
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
//dispatches action to the store. It will show or hide when its clicked

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
//the initial state is extracted from the store

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);