import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import '/Users/apple/E-Commerce/king-clothing/src/components/collections-overview/collections-overview.styles.scss'
import CollectionPreview from '../preview-component/collection-preview.component'
import {selectCollectionsForPreview} from '/Users/apple/E-Commerce/king-clothing/src/redux/shop-redux/shop.selectors.js'


const CollectionsOverview = ({ collections }) => (
    <div className= 'collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}

    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
    })


    export default connect(mapStateToProps)(CollectionsOverview)