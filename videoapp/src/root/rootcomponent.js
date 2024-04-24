import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainser';
import AddVideo from '../app/addvideo';


function MyRootComponent() {
    return ( 
        <div>
            <div style={{
                        color:"red",
                        textAlign:"center",
                        fontFamily:"sans-serif"
                        }}>
                <Logo></Logo>
            </div>
            
            <VideoContainer></VideoContainer>
            <AddVideo></AddVideo>

            
        </div>
     );
}

export default MyRootComponent;