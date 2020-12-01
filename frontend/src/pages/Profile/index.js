import React, { useState, useEffect } from 'react'
import ProfilePanel from '../../components/ProfilePanel'
import { useParams } from 'react-router-dom'
import './style.css'
import PostCard from '../../components/PostCard'

function Profile(props) {
    let { username } = useParams();
    document.title = `@${username} | Bubbles`;
    let [userData, setUserdata] = useState({});
    let [postCards, setPostCards] = useState([]);
    let profilePanel = <h2 style={{padding: "2em"}} id="profilePlaceholder">User does not exist</h2>
    if(userData.username) profilePanel = <ProfilePanel user={userData} />

    useEffect(async () => {
        const response = await fetch('/api/profile/' + username);
        let userinfo = await response.json();
        setUserdata(userinfo);
    }, [])

    useEffect(async () => {
        const response = await fetch('/api/allposts/' + username);
        let postArr = await response.json();
        let temp = postArr.map((post) => <PostCard postData={post} referrer="profile" />)
        setPostCards(temp);
    }, [])

    return (
        <div id="profilePageGrid">
            <div id="profilePanelCon">
                {profilePanel}
            </div>
            <div id="postListCon">
                {postCards}
            </div>
        </div>
    )
}

export default Profile
