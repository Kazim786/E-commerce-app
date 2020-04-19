import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//returns an object with the same keys as the inputSelectors argument, 
//but with the selectors replaced with their values
import { selectDirectorySections } from '../../redux/directory-redux/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';





const Directory = ({ sections }) => (
  //Used spread operator because it integrates the 
  //object key values without forcing me to write everything I need out
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );

    const mapStateToProps = createStructuredSelector({
      sections: selectDirectorySections
    })

export default connect(mapStateToProps)(Directory);