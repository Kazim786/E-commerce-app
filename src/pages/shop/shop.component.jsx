import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '/Users/apple/E-Commerce/king-clothing/src/components/collections-overview/collections-overview.component.jsx'


const ShopPage = ({match}) => (
      <div className='shop-page'>
          <Route exact path={`${match.path}`} component = {CollectionsOverview} />
        
      </div>
    );




export default ShopPage;