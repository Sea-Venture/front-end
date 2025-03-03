import React from 'react'
import AuthText from '../atom/authText'
import AuthSloth from '../atom/authSloth'
import NavigateToggle from '../atom/navigateToggle'
import SsoButton from '../atom/ssoButton'
import LoginForm from '../molecule/loginform'





const authcontainer = () => {
  return (

    <>
        <AuthText authText="WELCOME"/>

        <AuthSloth authSloth="Get start your journey with us"/>

        <div className="mt-2">
            <LoginForm/>
        </div>

        <div className='mt-2 font-poppins'>
            <AuthSloth authSloth="Register with others"/>
        </div>
        

        <div className='mt-2'>
            <div className=''>
                <SsoButton provider="google" />
            </div>

            <div className='mt-2'>
                <SsoButton provider="facebook" />
            </div>

        </div>

        <div className='mt-2'>
            <NavigateToggle mainText='Already have an account!' subText='login' />
        </div>

        



    </>
  )
}

export default authcontainer