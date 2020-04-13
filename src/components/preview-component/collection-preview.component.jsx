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

export default CollectionPreview;