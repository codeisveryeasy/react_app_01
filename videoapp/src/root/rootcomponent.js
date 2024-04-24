import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainser';


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
            
        </div>
     );
}

export default MyRootComponent;