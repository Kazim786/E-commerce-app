import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className= 'checkout-page'>
        <div className= 'checkout-header'>
            <div className= 'header-block'>
                <span>Product</span>
            </div>
            <div className= 'header-block'>
                <span>Description of Product</span>
            </div>
            <div className= 'header-block'>
                <span>How much Quantity You have</span>
            </div>
            <div className= 'header-block'>
                <span>Price of the Product</span>
            </div>
            <div className= 'header-block'>
                <span>Delete from list</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                cartItem.name 
                )
        }
        <div className= 'total'>
            <span>So you total is:  ${total}</span>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)