import React from 'react'
import NavContainer from '../../atom/nav-bar/navContainer'
import LogoText from '../../atom/nav-bar/logoText';
import NavMenuItems from '../../molecule/nav-bar/navMenuItems';


const navItems = [
    { name: 'Home Page', url: '/' },
    { name: 'Beach Guide', url: '/about'},
    { name: 'Weather Info', url: '/contact' },

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