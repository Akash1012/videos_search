import React from 'react';

const VideoDetails = (props) => {
    const { video } = props
    return (
        <div>
            {video.snippet.title}
        </div>
    )
}

export default VideoDetails