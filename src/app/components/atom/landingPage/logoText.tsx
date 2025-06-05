import React from 'react'

const logoText = ({ logoname }: { logoname: string }) => {
  return (
    <a href="#" className="text-3xl md:text-4xl font-extrabold text-blue-700 hover:text-blue-500 transition duration-300">
      {logoname}
    </a>
  )
}

export default logoText