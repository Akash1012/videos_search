import React, { useState } from 'react'

import SearchBar from './searchBar';
import youtube from './youtube';

const App = () => {

    const [videos, setVideos] = useState([]);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmits={onTermSubmit} />
            I have {videos.length}
        </div>
    )
}


export default App;