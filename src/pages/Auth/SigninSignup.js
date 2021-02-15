import React from 'react';
import SignIn from '../../components/Signin/Signin';
import SignUp from '../../components/Signup/Signup';
import './SigninSignup.scss';

const SigninSignup = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
