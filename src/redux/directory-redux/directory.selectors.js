//that accepts Redux state as 
//an argument and returns data that is derived from that state to component.
import { createSelector } from 'reselect'
// creates memoized selectors. createSelector takes an array of 
//input-selectors and a transform function as its arguments.
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections 
);