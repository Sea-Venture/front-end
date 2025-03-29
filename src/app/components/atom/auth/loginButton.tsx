import React from 'react'

const loginButton = ({btnName}: {btnName: String}) => {
  return (
    <button className="py-3 px-10 ml-2 bg-black border text-font-poppins rounded-xl hover:scale-110 duration-300 font-semibold text-white" type="submit">
        {btnName}
    </button>
  )
}

export default loginButton