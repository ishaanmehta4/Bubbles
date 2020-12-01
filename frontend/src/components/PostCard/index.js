import React from 'react'
import { Link } from 'react-router-dom'
import PostMediaPlayer from '../PostMediaPlayer'
import './style.css'
import moment from 'moment'

function PostCard(props) {
    let timestamp = props.postData.createdAt;
    let usernameComponent = 
        (<div><Link to={`/posts/${props.postData.username}/`} >
            <div className='postUsername'>@{props.postData.username}</div></Link>
        </div>)
    return (
        <div className='postCardCon'>
            {props.referrer =='favourites' && usernameComponent}
            <Link to={`/posts/${props.postData.username}/${props.postData.slug}`} >
                <div className='postTitle'>{props.postData.title}</div></Link>
            <div className='postTimeStamp'><i className='lni lni-calendar'></i>{moment(timestamp).fromNow()}</div>
            <PostMediaPlayer url={props.postData.url} type={props.postData.type} />
        </div>
    )
}

export default PostCard
