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
                <Video myid="LHLaP7g1SaA" likes="40" dislike="10"></Video>
                <Video myid="GI2oC-iJSJU" likes="31" dislike="1"></Video>
                <Video myid="eOfamFLGqIM" likes="21" dislike="5"></Video>
                <Video myid="2J-8iMNYSyQ" likes="10" dislike="2"></Video>
                <Video myid="Z8KZCYbjEng" likes="5" dislike="8"></Video>
                <Video myid="GROqwFFLl3s" likes="2" dislike="6"></Video>
                <Video myid="x60zHw_z4NM" likes="1" dislike="3"></Video>
           
                
            </div>

        </div>
    );
}

export default VideoContainer;