import React from 'react'
import { FaEdit } from 'react-icons/fa'

const editButton = () => {
  return (
    <button className="absolute bottom-2 right-6 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700" title="Edit Profile">
      <FaEdit className="w-5 h-5" />
    </button>
  )
}

export default editButton