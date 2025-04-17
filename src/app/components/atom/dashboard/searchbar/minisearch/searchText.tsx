import React from 'react'

const searchText = ({searchText}: {searchText: string}) => {
  return (
    <div className='dark:text-gray-100 text-gray-800'>{searchText}</div>
  )
}

export default searchText