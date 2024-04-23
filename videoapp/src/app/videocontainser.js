import React from 'react';
import Video from './video';

function VideoContainer() {
    return (
        <div style={{
            border: "1px solid pink",
            display: "flex",
            flexDirection:"column",
            marginTop:"10px"
        }}>
            <div style={{
                padding:"10px"
            }}>
                List of videos:
            </div>
            <div style={{
                display:"flex",
                flexWrap:"wrap"
            }}>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                
            </div>

        </div>
    );
}

export default VideoContainer;