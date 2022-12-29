import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <Link  to="/" className='loginButton'>Go home</Link>
    </div>
  )
}
