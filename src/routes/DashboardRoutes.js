import { Routes, Route } from "react-router-dom"
import { HeaderApp } from '../components/header/HeaderApp'
import { PageNotFound } from "../components/pageNotFound/PageNotFound"
import { EpisodieDetail } from "../podcasts/views/episodieDetail/EpisodieDetail"
import { PodcastDetailScreen } from "../podcasts/views/podcastDetail/PodcastDetailScreen"
import { PodcastScreen } from '../podcasts/views/PodcastScreen'
import { SearchPodcast } from "../podcasts/views/searchPodcast/SearchPodcast"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 60 * 24,
    },
  }
});
export const DashboardRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <div>
            <HeaderApp />
            <Routes>
                <Route path="/" element={<PodcastScreen /> } />
                <Route path="/search" element={<SearchPodcast/> } />
                <Route path="/podcast/:podcastId" element={<PodcastDetailScreen /> } />
                <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodieDetail /> } />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    </QueryClientProvider>
  )
}
