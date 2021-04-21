import React from 'react';

import VideoItem from './videoItem';

const VideoList = (props) => {
    const { videos, onVideoSelect } = props;
    const renderList = videos.map((video, index) => {
        return <VideoItem key={index} onVideoSelect={onVideoSelect} video={video} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList;