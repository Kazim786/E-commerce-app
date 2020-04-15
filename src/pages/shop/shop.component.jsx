import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '/Users/apple/E-Commerce/king-clothing/src/components/collections-overview/collections-overview.component.jsx'
import CollectionPage from '/Users/apple/E-Commerce/king-clothing/src/pages/collections/collection.component.jsx'

const ShopPage = ({match}) => (
      <div className='shop-page'>
          <Route exact path={`${match.path}`} component = {CollectionsOverview} />
          <Route path= {`${match.path}/:collectionId`} component= {CollectionPage} />
      </div>
    );




export default ShopPage;