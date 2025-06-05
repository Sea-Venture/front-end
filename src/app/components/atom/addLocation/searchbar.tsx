import React from 'react'

const searchbar = () => {
  return (
  
  <form className="flex items-center">
    <label htmlFor="simple-search" className="sr-only">
        Search
    </label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
                type="text"
                id="simple-search"
                placeholder="Search for location"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
        </div>
    </form>
  )
}

export default searchbar