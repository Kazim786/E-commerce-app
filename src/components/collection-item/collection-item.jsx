import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '/Users/apple/E-Commerce/king-clothing/src/redux/cart/cart.action.js';

import '/Users/apple/E-Commerce/king-clothing/src/components/collection-item/collection-item.style.scss';


//This is the component that is repeated all throughout the site with different pics and prices
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
//dispatches action of adding item

export default connect(
  null, //since we're not taking mapState
  mapDispatchToProps
)(CollectionItem);