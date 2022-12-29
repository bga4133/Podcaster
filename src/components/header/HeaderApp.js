import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderApp = () => {
  return (
    <header className='headerApp'>
        <Link to="/" className='headerTitle'>
          <h2 className='headerTitle'>Podcaster</h2>
        </Link>
    </header>
  )
}
