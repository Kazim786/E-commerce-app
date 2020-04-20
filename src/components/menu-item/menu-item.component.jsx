import React from 'react';
import { withRouter } from 'react-router-dom';

//This is a higher order component. Function that takes a component as argument 
//returns a modified component

import './menu-item.styles.scss';

// Dynamically Generate title, images, etc and to do that I used destructuring. 
//So I passed in title, imageUrl etc 
// I am using a Functional component because I dont need it to hold state


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* to know where I will be in the directory i included match.url  */}
    {/* Even if URL is changed it will match now because it is dynamic */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
//withRouter powers up MenuItem. Now it has access to History, location, match etc
//withRouter connects components to the router