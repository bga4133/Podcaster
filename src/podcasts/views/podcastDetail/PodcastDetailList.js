import React from 'react'
import { Link } from 'react-router-dom'
import { secondsToTime } from '../../atoms/utils/secondsToTime'

export const PodcastDetailList = ({trackId , trackName, releaseDate, trackTimeMillis, getIdEpisode, podcastId}) => {
  return (
    <tr className='podcastDetail' key={trackId}>
    <td>
    <Link onClick={() => getIdEpisode(trackId)} className='titlePodcastList' to={`/podcast/${podcastId}/episode/${trackId}`}>Details
    {trackName}
    </Link>
    </td>
    <td>{releaseDate}</td>
    <td>{secondsToTime(trackTimeMillis)}</td>
  </tr>
  )
}
