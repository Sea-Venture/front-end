import React from 'react'
import  GuideText  from '../../atom/dashboard/profile/guideText'

const guideButton = ({buttonText, onClick }: {buttonText: string, onClick: () => void}) => {
  return (

    <>
        <button className='bg-black ml-16 mt-5 text-white p-2 rounded flex items-center' onClick={onClick}>
            <GuideText guideText={buttonText} />
        </button>
    </>
  )
}

export default guideButton