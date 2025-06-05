import React from 'react'
import { FaPlus } from "react-icons/fa";

const addButton = ({onClick}: {onClick: () => void}) => {
  return (
    <button
        type="button"
        id="createProductButton"
        onClick={onClick}
        className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            <div className="h-3.5 w-3.5 mr-1.5 -ml-1">
                <FaPlus className="text-white" size={14} />
            </div>
                Add Location
    </button>
  )
}

export default addButton