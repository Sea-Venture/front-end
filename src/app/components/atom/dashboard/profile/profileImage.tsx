import React from 'react'

const profileImage = ({imageUrl}: {imageUrl: string}) => {
  return (
    <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
    />
  )
}

export default profileImage