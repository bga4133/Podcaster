import React from 'react'

export const InputSearch = ({setQuery}) => {
  return (
    <input type="text" placeholder="search" className="search" onChange={(e) => setQuery(e.target.value)} />
  )
}
