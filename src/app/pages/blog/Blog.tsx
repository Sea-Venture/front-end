"use client"

import { useUserStore } from '@/store/UserStore'
import React, { useEffect } from 'react'

const Blog = () => {
  const { token } = useUserStore()
  useEffect(() => {
    console.log(token);
  }
  , [token])
    
  return (
    <div>{token}</div>
  )
}

export default Blog