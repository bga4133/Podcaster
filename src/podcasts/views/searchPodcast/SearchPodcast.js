import React, { useState } from 'react'
import { InputSearch } from '../components/InputSearch'

export const SearchPodcast = ({setQuery, responseLength}) => {
  return (
    <div className='searchContainer'>
      <p className='responseLength'>{responseLength}</p>
      <InputSearch setQuery={setQuery}/>
    </div>

  )
}
