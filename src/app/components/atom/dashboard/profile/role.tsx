import React from 'react'

const role = ({role}: {role: string}) => {
  return (
    <p className="text-gray-600 dark:text-gray-300">Role: {role}</p>
  )
}

export default role