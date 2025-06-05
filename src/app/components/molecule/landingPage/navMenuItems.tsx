import React from 'react'
import MenuItemText from '../../atom/landingPage/menuItemText'

const NavMenuItems = ({ navItems }: { navItems: { name: string, url: string }[] }) => {
  return (
    <ul className={`flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8`}>
      {navItems.map((item, index) => (
        <MenuItemText key={index} menuItemText={item.name} isActive={false} itemUrl={item.url} />
      ))}
    </ul>
  )
}

export default NavMenuItems