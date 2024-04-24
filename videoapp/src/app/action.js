import React, { useState } from 'react';

function ActionComponent(props) {

    //declare a state variable -> dislike
    let [dislike, iAmTheAuthority] = useState(10)
    let [likes, updateLike] = useState( parseInt(props.passlikes))

    function addLike(){
        console.log(likes)
        console.log(typeof likes)
        //only iAmTheAuthority can chage the value
        //of state variable -> dislike
        updateLike(likes + 1)

    }

    function addDisLike(){
        iAmTheAuthority(dislike+1)
    }


    return ( 
        <div>
            Likes: {likes}
            <button onClick={addLike}>+</button>
            <br />
            Dislike: {dislike}
            <button onClick={addDisLike}>-</button>
        </div>
     );
}

export default ActionComponent;