import React from 'react';
import VideoListItems from './VideoListItems';

const VideoList = (props) => {
    const VideoItem = props.videos.map((video)=> {
        return <VideoListItems key={video.etag} video={video}/>
    });

    return(
        <ul className="col-md-4 list-group">
            {VideoItem}
        </ul>
    );
};

export default VideoList;