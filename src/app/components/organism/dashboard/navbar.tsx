import React from 'react';
import DarkModeToggle from '../../darkModeToggle/darkModeToggle';
import LogoContainer from '../../molecule/dashboard/logoContainer';
import AvatarContainer from './avatarContainer';
import Searchbar from '../../molecule/dashboard/searchBar';

const menuItems = [
  {
    itemName: 'Profile',
  },
  {
    itemName: 'Settings',
  },
  {
    itemName: 'Logout',
  },
];

const Navbar = () => {
  return (
    <nav className="p-2 bg-gray-100 dark:bg-gray-800 flex items-center justify-between w-full">

      <div className="flex-shrink-0">
        <LogoContainer logoName="SeaVentures" imageUrl="https://avatars.githubusercontent.com/u/131803346?v=4" />
      </div>


      <div className="flex-grow mx-auto">
        <Searchbar />
      </div>


      <div className="flex items-center gap-4 flex-shrink-0">

        <DarkModeToggle />


        <div className="flex items-center justify-center border-4 border-gray-100 dark:border-gray-800 rounded-full p-2">
          <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-gray-700 p-2 px-2">
          <AvatarContainer propicUrl="https://avatars.githubusercontent.com/u/131803346?v=4" menuItems={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;