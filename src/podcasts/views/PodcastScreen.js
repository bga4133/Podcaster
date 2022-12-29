import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { Loader } from '../../components/loader/Loader';
import { Podcastlist } from './podcastList/PodcastList';
import { SearchPodcast } from './searchPodcast/SearchPodcast';

export const PodcastScreen = () => {
    const [IsLoading, setIsLoading] = useState(false);
    const [PodcastResponse, setPodcastResponse] = useState([]);
    const [query, setQuery] = useState('')

    const getPodcasts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch ("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
            const { feed } = await response.json();
            setPodcastResponse(feed.entry)
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            throw new Error(e);
        }
    }
    
    let podcast = useMemo(() => PodcastResponse, [PodcastResponse]);
    const filterSearch = podcast.map((item1) => item1).
    filter((item) => item.title.label.toLowerCase().includes(query) || item['im:artist'].label.toLowerCase().includes(query))
    const responseLength = podcast.length;
    useEffect(() => {
      getPodcasts();
    }, [])

  return (
    <div>
      <SearchPodcast setQuery={setQuery} responseLength={responseLength} />
      {IsLoading && <Loader />}
      <div  className='podcastScreen' data-testid="imgId">
      {filterSearch.map((item) => (
        <>
        <Podcastlist key={item.id.attributes['im:id']} item={item} />
        </>
      )) }
      </div>
      {PodcastResponse == null && <p>Error...</p>}
    </div>
  )
}


