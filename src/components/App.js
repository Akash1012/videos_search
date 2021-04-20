import React, { useState } from 'react'

import SearchBar from './searchBar';
import youtube from './youtube';
import VideoList from './videoList';
import VideoDetails from './videoDetails'

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmits={onTermSubmit} />
            <VideoDetails video={selectedVideo} />
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
    )
}


export default App;