import React from 'react'

const location = ({paraText}: {paraText: string}) => {
  return (
    <p className="text-gray-500 text-xs dark:text-gray-100">{paraText}</p>
  )
}

export default location