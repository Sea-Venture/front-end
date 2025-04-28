import React from 'react'

const profileTitle = ({title}: {title: string}) => {
  return (
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        {title}
    </h1>
  )
}

export default profileTitle