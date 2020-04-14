import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelect} from 'reselect'
import CollectionPreview from '/Users/apple/E-Commerce/king-clothing/src/components/preview-component/collection-preview.component.jsx';
import {selectCollections} from '../../redux/shop-redux/shop.selectors'
const ShopPage = ({ collections }) => (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );

    const mapStateToProps = createStructuredSelector({
      collections: selectCollections
    })



export default connect(mapStateToProps) (ShopPage);