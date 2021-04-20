import React, { useState } from 'react'

import SearchBar from './searchBar';
import youtube from './youtube';
import VideoList from './videoList';
import VideoDetails from './videoDetails'

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVided] = useState(null);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    const onVideoSelect = (video) => {
        console.log("VIdeo", video)
        setSelectedVided(video)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmits={onTermSubmit} />
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
    )
}


export default App;