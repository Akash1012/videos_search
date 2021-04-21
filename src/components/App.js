import React, { useState, useEffect } from 'react'

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
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    useEffect(() => {
        onTermSubmit("Mars")
    }, [])

    return (
        <div className="ui container">
            <SearchBar onFormSubmits={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;