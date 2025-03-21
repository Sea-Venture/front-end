import React from 'react'

const logoImage = (imageUrl: {imageUrl: string}) => {
  return (
    <div className="logo-image size-10">
      <img src={imageUrl.imageUrl} alt="logo" />
    </div>
  )
}

export default logoImage