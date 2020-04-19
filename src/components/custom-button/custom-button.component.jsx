import React from 'react';

import '/Users/apple/E-Commerce/king-clothing/src/components/custom-button/custom-button.styles.scss';
//children is what i have put between the tag
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps

}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
    //if isGoogleSignIN is true then the class google-sign-in will be used.
  >
    {children}
  </button>
);

export default CustomButton;