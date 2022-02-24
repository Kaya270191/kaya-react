import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

function YoutubeVideo({videoId, videoName, videoLength, videoDescription, videoAuthor, children}){
    return (
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}
 
export default YoutubeVideo;

//타입의 유효성 검증
YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.string,
    videoDescription: PropTypes.string
}

//props 의 디폴트값 설정
YoutubeVideo.defaultProps = {
    videoAuthor: "syleemomo"
}