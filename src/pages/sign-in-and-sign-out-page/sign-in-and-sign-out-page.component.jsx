import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'

import SignUp from '/Users/apple/E-Commerce/king-clothing/src/components/sign-up/sign-up.components.jsx';

import '/Users/apple/E-Commerce/king-clothing/src/pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;