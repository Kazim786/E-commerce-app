//Selectors are functions that take Redux state 
//as an argument and return some data to pass to the component.
import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
)
