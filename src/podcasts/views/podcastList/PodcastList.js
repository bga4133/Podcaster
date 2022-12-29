import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Podcastlist = ({item}) => {
  return (
    <div key={item.id.attributes['im:id'] } className='cardPodcast'>
      <img src={item['im:image'][2].label} alt={item['im:image'][0].label}/>
      <Link className='titlePodcastList' to={`/podcast/${item.id.attributes['im:id']}`}><h3>{item.title.label}</h3></Link>
      <Link className='titlePodcastList'><p>Author: {item['im:artist'].label}</p></Link>
    </div>
  )
}