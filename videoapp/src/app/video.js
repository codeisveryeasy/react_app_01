import React from 'react';
import ActionComponent from './action';

function Video(props) {

    let score = 8
    let name  = "Academy"
    let videourl = `https://www.youtube.com/embed/${props.myid}`
    

    return (  
        <div style={{
            border:"1px solid red",
            margin:"10px",
            padding:"5px"
        }}>
            <h3>My video {props.myid}</h3>
            <iframe width="320" src={videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br />
            {name} age is {score}
            <br />
            Likes: {props.likes}
            <ActionComponent passlikes={props.likes}></ActionComponent>
        </div>
    );
}

export default Video;