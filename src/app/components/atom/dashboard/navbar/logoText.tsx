import React from 'react'

const logoText = (logoName : {logoName: string}) => {
  return (

    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
      <span>{logoName.logoName}</span>
    </div>
    
  )
}

export default logoText