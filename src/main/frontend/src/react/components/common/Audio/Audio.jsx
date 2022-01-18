import React from 'react';
import {useEffect} from 'react';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        playing : state.music.currentComposetion.playing,
        url : state.music.currentComposetion.url
    }
}
const Audio = (props) => {
    useEffect ( () => {
        const audio = document.getElementById("audio");
        audio.load();
        props.playing ? audio.play() : audio.pause();
        console.log("audio");
    });
    return (
        <div>
            <audio id="audio">
                <source src={props.url}/>
                Your browser does not support the <code>audio</code> element.
            </audio>
        </div>
    )

}

export default connect(mapStateToProps, {})(Audio);