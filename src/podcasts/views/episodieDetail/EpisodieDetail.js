import React from 'react'
import { Sidebar } from '../components/Sidebar';

export const EpisodieDetail = () => {
let episodeById = JSON.parse(localStorage.getItem("episodeById"));
  return (
    <div className='containerPodcastDetail'>
        <div className="columnInfoDetail">
          <Sidebar />
        </div>
        <div className='columAudioInfo episodeContainer'>
            <div className='cardEpisode'>
            {episodeById.map((item) => ( 
                <div key={item.artistId}>
                  <h3>{item.trackName}</h3>
                  <p>{item.shortDescription}</p>
                  <p>This episode is sponsored by <strong className='boldFont'>{item.collectionName}</strong> and <strong className='boldFont'>{item.trackName}</strong></p>
                  <audio src={item.episodeUrl} controls="controls" type="audio/mpeg" preload="preload">
                  </audio>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
