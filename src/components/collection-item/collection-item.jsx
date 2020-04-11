import React from 'react'
import '/Users/apple/E-Commerce/king-clothing/src/components/collection-item/collection-item.style.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className = 'collection-item'>

        <div 
        className= 'image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
            <div className= 'collection-footer'>
        <span className= 'name' >{name}</span>
        <span className= 'price' >{price}</span>
            </div>

        

    </div>
)
export default CollectionItem