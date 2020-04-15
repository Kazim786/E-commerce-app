import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '/Users/apple/E-Commerce/king-clothing/src/components/collections-overview/collections-overview.component.jsx'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
      <div className='shop-page'>
          <Route exact path={`${match.path}`} component = {CollectionsOverview} />
          <Route path= {`${math.path}/:collectionId`} component= {CollectionPage} />
      </div>
    );




export default ShopPage;