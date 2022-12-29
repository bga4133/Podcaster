import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import { Loader } from '../../../components/loader/Loader';
import { secondsToTime } from '../../atoms/utils/secondsToTime';
import { Sidebar } from '../components/Sidebar';
import { PodcastDetailList } from './PodcastDetailList';


export const PodcastDetailScreen = () => {
const [PodcastResponseDetail, setPodcastResponseDetail] = useState([]); 
const [IsLoading, setIsLoading] = useState(false);
  
const { podcastId } = useParams();

const getPodcastDetailById2 = async () => {
  setIsLoading(true);
  try {
      const response = await fetch (`https://cors-anywhere.herokuapp.com/itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`);
      const data = await response.json();
      const { results } = data;
      results.slice(1);
      //results.slice(1), episodiUrl
      setPodcastResponseDetail(results)
      setIsLoading(false);
  } catch (e) {
      setIsLoading(false);
      throw new Error(e);
  }
}
useEffect(() => {
  getPodcastDetailById2();
}, [])

let podcastDetail = useMemo(() => PodcastResponseDetail, [PodcastResponseDetail]);
const PrincipalInfo = podcastDetail.filter((item) => item.wrapperType === 'track');
localStorage.setItem("PrincipalInfo", JSON.stringify(PrincipalInfo));
const descriptionInfo = podcastDetail.filter((item) => item.description)
localStorage.setItem("PrincipalInfoDescription", JSON.stringify(descriptionInfo[2]));

const getIdEpisode = (id) => {
  const episodeById = podcastDetail.filter((item) => id === item.trackId);
  localStorage.setItem("episodeById", JSON.stringify(episodeById));
}
  return (
    <div key="" className='containerPodcastDetail'>
      {IsLoading && <Loader />}
      <div className="columnInfoDetail">
      {PrincipalInfo.map(({colectionId, artworkUrl600, artistName, trackCount}) => (
        <Sidebar colectionId={colectionId} artworkUrl600={artworkUrl600} artistName={artistName} trackCount={trackCount} />
      ))}
      </div>
      <div className='columAudioInfo'>
        <div className='cardAudioInfo' data-testid="imgId">
          <div>
          {PrincipalInfo.map((item) => (
                <div key={item.trackId}>
                    <h2>Episodes: {item.trackCount}</h2>
                </div>
                ))}
          </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
         <tbody>
          {podcastDetail.map(({trackId , trackName, releaseDate, trackTimeMillis}) => ( 
            <PodcastDetailList podcastId={podcastId} getIdEpisode={getIdEpisode} key={trackId} trackId={trackId} trackName={trackName} releaseDate={releaseDate} trackTimeMillis={trackTimeMillis} />
          ))}
          </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}
