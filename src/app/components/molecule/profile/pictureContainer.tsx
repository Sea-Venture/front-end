import React from 'react'
import ProfileImage from '../../atom/dashboard/profile/profileImage'
import EditButton from '../../atom/dashboard/profile/editButton'

const pictureContainer = ({imageUrl}: {imageUrl: string}) => {
  return (
    <div className="relative w-64 h-64 mb-8">
        <ProfileImage imageUrl={imageUrl}/>
        <EditButton />
    </div>
  )
}

export default pictureContainer