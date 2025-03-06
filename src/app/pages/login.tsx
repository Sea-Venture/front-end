"use client"

import React, { useState } from 'react';
import AuthImageContainer from '../components/organism/authimagecontainer';
import AuthContainer from '../components/organism/authcontainer';

const Login = () => {
  const [authType, setAuthType] = useState('login');

  const toggleAuthType = () => {
    setAuthType((prevAuthType) => (prevAuthType === 'login' ? 'register' : 'login'));
  };

  return (
    <div className='border-red-500 bg-gray-200 min-h-screen flex items-center justify-center sm:px-4 lg:px-6'>
      <div className="bg-gray-100 p-3 flex rounded-2xl shadow-lg max-w-3xl w-full">
        <div className="md:w-1/2 px-5 flex-1">
          <AuthContainer authType={authType} toggleAuthType={toggleAuthType} />
        </div>
        <div className="w-1/2 md:block hidden">
          <div className='h-full'>
            <AuthImageContainer authImage="/login_img/img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;