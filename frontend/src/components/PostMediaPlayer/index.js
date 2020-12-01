import React from 'react'
import './style.css'

function PostMediaPlayer(props) {
    let playerCode = '';
    if (props.type === 'audio')
        playerCode = (<div className='mediaPlayer audioPlayer'>
            <audio controls>
                <source src={props.url} type="audio/mp4" />
            Your browser does not support the audio element.
        </audio>
        </div>)
    else if (props.type === 'video')
        playerCode = (<div className='mediaPlayer videoPlayer'>
            <video controls>
                <source src={props.url} type="video/mp4" />
         Your browser does not support the audio element.
     </video>
        </div>)
    else if (props.type === 'youtube') {
        playerCode = (<div className='mediaPlayer videoPlayer'>
            <iframe width="" height="" src={"https://www.youtube.com/embed/" + props.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>)
    }
    return playerCode
}

export default PostMediaPlayer
