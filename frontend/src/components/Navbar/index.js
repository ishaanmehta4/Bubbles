import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
    return (
        <div id='navbarWrapper'>
            <div id='navbarOpener' onClick={expandNavbar}>...</div>
            <Link to="/">
                <div id="navLogo">
                    Bubbles</div>
            </Link>
            <div id='navbarBreaker'></div>
            <div id="navList" onClick={expandNavbar}>
                <a href="https://github.com/ishaanmehta4/bubbles" target='_blank'>
                    <div id="navJoin">GitHub</div>
                </a>
                <a href="/#homegrid2">
                    <div id="navJoin">Start your own Podcast</div>
                </a>
                <Link to="/favourites">
                    <div id="navStarred">Favourites</div>
                </Link>
            </div>

        </div>
    )
}

var isNavbarOpen = false;
function expandNavbar() {
    if (window.innerWidth <= 900) {
        if (!isNavbarOpen) {
            document.getElementById("navbarWrapper").style.height = "100vh";
            document.getElementById("navbarOpener").innerHTML = "+";
            document.getElementById("navbarOpener").style.transform = "rotate(45deg)";
            document.getElementById("navbarOpener").style.top = "-0.15em";
        }
        else {
            document.getElementById("navbarWrapper").style.height = "9vh";
            document.getElementById("navbarOpener").innerHTML = "...";
            document.getElementById("navbarOpener").style.transform = "rotate(0deg)";
            document.getElementById("navbarOpener").style.top = "-0.45em";
        }
        isNavbarOpen = !isNavbarOpen;
    }
}

export default Navbar
