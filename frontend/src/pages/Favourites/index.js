import React, { useState, useEffect } from 'react'
import PostCard from '../../components/PostCard';
import './style.css'


function Favourites() {
    document.title = 'Favourites | Bubbles';
    let [postCards, setPostCards] = useState([]);
    let favArr = localStorage.getItem('favourites') || ''
    useEffect(async () => {
        const response = await fetch('/api/fav/' + favArr);
        let postArr = await response.json();
        let temp = postArr.map((post) => <PostCard postData={post} referrer="favourites" />)
        setPostCards(temp);
    }, [])

return <div style={{paddingTop: "10vh", height: "100vh"}} id='favouritesContainer'><div>{postCards}</div></div>
}


export default Favourites