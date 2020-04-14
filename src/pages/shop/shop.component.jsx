import React from 'react';

import CollectionsOverview from '/Users/apple/E-Commerce/king-clothing/src/components/collections-overview/collections-overview.component.jsx'


const ShopPage = ({ collections }) => (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionsOverview />
        ))}
      </div>
    );




export default ShopPage;