import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

let username = '';
let favCount = 0;
function ProfilePanel(props) {
    username = props.user.username;
    favCount = props.user.favouritesCount;
    setTimeout(initFavourites, 1000)
    return (
        <div id="profilePanelGrid">
            <div id="profileTopPanel">
                <div id="profilePictureCon">
                    <img src={props.user.profilePicture} />
                </div>
                <Link to={'/posts/' + props.user.username}>
                    <div id="profileName">{props.user.name}</div>
                    <div id="username">@{props.user.username}</div>
                </Link>
            </div>
            <div id="favouriteButtonCon" className='' onClick={favouriteClickHandler}><span><i className="lni lni-star"></i>Add to favourites</span></div>
            <div className='bottomPanelData'><i className="lni lni-mic"></i>{props.user.postCount} Uploads</div>
            <div className='bottomPanelData'><i className="lni lni-star-filled"></i>Favourited by <span id='favCountSpan'>{favCount}</span> users</div>
        </div>
    )
}

let isFavourited = false;
let initCount = 0;
function toggleFavouriteButton(callerFn) {
    if (callerFn == 'init') {
        initCount++;
        if (initCount % 2 == 0) return;
    }
    if (isFavourited) {
        document.querySelector('#favouriteButtonCon > span').innerHTML = '<i class="lni lni-checkmark"></i>Already favourited';
        document.getElementById('favouriteButtonCon').classList.add('favourited')
    }
    else {
        document.getElementById('favouriteButtonCon').classList.remove('favourited')
        document.querySelector('#favouriteButtonCon > span').innerHTML = '<i class="lni lni-star"></i>Add to favourites';
    }
}

async function favouriteClickHandler() {
    let favouritesArr = localStorage.getItem('favourites') || '';
    favouritesArr = favouritesArr && favouritesArr.split(',');
    if (favouritesArr == '') favouritesArr = []
    let isFav = favouritesArr.find(user => user === username)
    if (isFav !== undefined)// username is already favourited, and must be removed
    {
        favCount--;
        document.getElementById('favCountSpan').innerHTML = favCount;
        let newArr = [];
        let i = 0;
        for (let user of favouritesArr) {
            if (user !== username) {
                newArr[i] = user;
                i++;
            }
        }
        localStorage.setItem('favourites', newArr.toString());
    }
    else // username is not favourited, add it to fav list.
    {
        favCount++;
        document.getElementById('favCountSpan').innerHTML = favCount;
        if (favouritesArr === '0' || favouritesArr === '') favouritesArr = []
        favouritesArr.push(username);
        localStorage.setItem('favourites', favouritesArr.toString());
    }
    isFavourited = !isFavourited
    toggleFavouriteButton('handler');
    await fetch(`/api/setfavourite/${username}/${favCount}`)
}

function initFavourites() {
    let favouritesArr = localStorage.getItem('favourites') || '';
    if (favouritesArr == '') { localStorage.setItem('favourites', ''); return; }
    favouritesArr = favouritesArr.split(',');
    let isFav = favouritesArr.find(user => user === username)
    if (isFav) {
        isFavourited = true;
        toggleFavouriteButton('init');
    }
}

export default ProfilePanel
