import React from 'react'

const eventName = ({nameText, locationName}: {nameText:string, locationName: string}) => {
  return (
        <h6 className="text-slate-800 text-xl font-semibold">
            <span>{nameText},</span> <span>
              
            </span>
            <span>{locationName}</span>
        </h6>
  )
}

export default eventName