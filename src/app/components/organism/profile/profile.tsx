import React from 'react';
import ProfileTitle from '../../atom/dashboard/profile/profileTitle';
import PictureContainer from '../../molecule/profile/pictureContainer'
import Role from '../../atom/dashboard/profile/role'
import UserName from '../../atom/dashboard/profile/userName'

const profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <ProfileTitle title="User Profile" />
      <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">

        <PictureContainer imageUrl='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRM0PPG0J_is3qLRGE3NL_TerDu5A06ZenSUlWizDgvmY4wE7BMY3ZTVD0t9JeF63ndALe3TX5ya2GhwPo' />

        <UserName userName="John Doe" />
        <Role role="User" />
      </div>
    </div>
  );
};

export default profile;