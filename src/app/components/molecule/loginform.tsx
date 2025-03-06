import React from 'react';
import InputField from '../atom/inputField';
import LoginButton from '../atom/loginButton';

const loginform = ({authType}: {authType:string}) => {

  if (authType === 'login') {
    return (
      <form className="mt-6 w-full max-w-md mx-auto" action="#" method="POST">
        <div className="mb-4">
           <InputField type="email" placeholder="Enter Email Address" />
       </div>
        <div className="mb-4">
          <InputField type="password" placeholder="Enter Password" />
        </div>
        <div className="flex justify-center items-center mt-4">
          <LoginButton btnName="Login" />
        </div>
      </form>
    );
  }

  if (authType === 'register') {
    return (
      <form className="mt-6 w-full max-w-md mx-auto" action="#" method="POST">
         <div className="mb-4">
           <InputField type="text" placeholder="Enter a username" />
         </div>
         <div className="mb-4">
           <InputField type="email" placeholder="Enter Email Address" />
         </div>
         <div className="mb-4">
           <InputField type="password" placeholder="Enter Password" />
         </div>

         <div className="flex justify-center items-center mt-4">
           <LoginButton btnName="Register" />
         </div>
       </form>
    );
  }
};

export default loginform;