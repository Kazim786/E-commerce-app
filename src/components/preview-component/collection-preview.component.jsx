import React from 'react';

import CollectionItem from '/Users/apple/E-Commerce/king-clothing/src/components/collection-item/collection-item.jsx';

import '/Users/apple/E-Commerce/king-clothing/src/components/preview-component/collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
// uses index and displays first 4 items of each category
//References shop data and when the CollectionPreview component is called within the shopPage 
//it will initiate its task
export default CollectionPreview;