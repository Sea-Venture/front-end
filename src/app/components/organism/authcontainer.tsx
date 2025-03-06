import React from 'react';
import AuthText from '../atom/authText';
import AuthSloth from '../atom/authSloth';
import NavigateToggle from '../atom/navigateToggle';
import SsoButton from '../atom/ssoButton';
import LoginForm from '../molecule/loginform';

const AuthContainer = ({ authType, toggleAuthType }: { authType: string; toggleAuthType: () => void }) => {
  if (authType === 'login') {
    return (
      <>
        <AuthText authText="Again" />
        <AuthSloth authSloth="Get start your journey with us" />
        <div className="mt-2">
          <LoginForm authType='login' />
        </div>
        <div className="mt-2 font-poppins">
          <AuthSloth authSloth="Other Login Options" />
        </div>
        <div className="mt-2">
          <div className="">
            <SsoButton provider="google" />
          </div>
          <div className="mt-2">
            <SsoButton provider="facebook" />
          </div>
        </div>
        <div className="mt-2">
          <NavigateToggle mainText="Don't have an account?" subText="Register" onClick={toggleAuthType} />
        </div>
      </>
    );
  } else if (authType === 'register') {
    return (
      <>
        <AuthText authText="WELCOME" />
        <AuthSloth authSloth="Get start your journey with us" />
        <div className="mt-2">
          <LoginForm authType='register' />
        </div>
        <div className="mt-2 font-poppins">
          <AuthSloth authSloth="Register with others" />
        </div>
        <div className="mt-2">
          <div className="">
            <SsoButton provider="google" />
          </div>
          <div className="mt-2">
            <SsoButton provider="facebook" />
          </div>
        </div>
        <div className="mt-2">
          <NavigateToggle mainText="Already have an account?" subText="Login" onClick={toggleAuthType} />
        </div>
      </>
    );
  }
  return null;
};

export default AuthContainer;