import React from 'react'

const navigateToggle = ({mainText,subText}: {mainText: string, subText: string}) => {
  return (
    <div className="text-center text-black font-poppins">
      <p className="text-center text-sm">
        {mainText}
        <span className="text-red-500 ml-1">{subText}</span>
      </p>
    </div>
  )
}

export default navigateToggle