import React from 'react'
import NavContainer from '../../atom/landingPage/navContainer'
import LogoText from '../../atom/landingPage/logoText';
import NavMenuItems from '../../molecule/landingPage/navMenuItems';
import SsoButton from '../../atom/auth/ssoButton';



const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about'},
    { name: 'Contact', url: '/contact' },

];

const navBar = () => {

  
  return (
    <NavContainer>

        <LogoText logoname="SeaVentures" />
        <NavMenuItems menuOpen={false} navItems={navItems} />

    </NavContainer>
  )
}

export default navBar