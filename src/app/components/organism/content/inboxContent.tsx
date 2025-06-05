import React from 'react'

const inboxContent = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 h-[calc(100vh-4rem)] overflow-y-auto sm:ml-64">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Inbox Content
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        This is the AddContent component. It is displayed under the Navbar and beside the Sidebar on larger screens. On mobile devices, it takes up the full width and starts at the top.
      </p>
    </div>
  )
}

export default inboxContent