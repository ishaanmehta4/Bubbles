import React from 'react'
import './style.css'
import mockup from './mockup1.png'
import bubble from './bubblet.png'
import illustration from './illustration.jpg'

function Home() {
    document.title = 'Home | Bubbles';
    return (
        <div>

            <div id="homegrid">
                <div id="bubblecon">
                    <img src={bubble} alt="" />
                </div>
                <div id="herotext">
                    <span id="sitename">Bubbles</span>
                    <br />
                    <span id='podeasy'>Podcasts made <b>easy</b>.</span>
                    <div id="joinintro">Start your own podcast within 30 seconds, just send 'Join' to our facebook page.</div>
                    <a href="https://m.me/bubblespodcasts" target="_blank">
                        <div id="joinbutton" className='homepagebutton'>Join Now</div>
                    </a>
                    <a href="#homegrid2">
                        <div id="knowmorebutton" className='homepagebutton'>Know More</div>
                    </a>
                </div>
                <div id="mockupimgcon">
                    <img src={mockup} alt="" id="mockupimg" />
                </div>
            </div>

            <div id="homegrid2">
                <div className="panel" id='imgpanel'>
                    <img src={illustration} alt="" />
                    <a href="https://m.me/bubblespodcasts" target="_blank">
                        <div id="createaccountbutton" className='homepagebutton'>
                            Open facebook page and signup
            </div></a>

                </div>
                <div className="panel" id='textpanel'>
                    <span><em>Bubbles</em> is probably the easiest way to create and manage podcasts (or audio-blogs).
            You don't even need to visit the website to add new podcasts, it all can be done by using Facebook messenger.</span>
                    <br />
                    <h3>How does it work?</h3>
                    <ul>
                        <li>You visit our <a href="https://fb.me/bubblespodcasts" traget="_blank">Facebook page</a> and send a message saying <b>'Join'</b> to sign up.</li>
                        <li>That's it. Your Bubbles blog is ready to use. You will be guided on how to manage your account.</li>
                        <li>Adding content to your new blog is as simple as sending voicenotes on Messenger. The voicenotes or audio attachments you send will automatically be added to your blog.</li>
                        <li>Your regular listeners can also 'star' your profile, and they would be notified about any new audios you upload.</li>
                    </ul>
                </div>
            </div>

            <div id="homeFooter">
                <span>Developed and maintained by <a href='https://instagram.com/1shaan_/' target='_blank'>Ishaan Mehta</a>.</span>
                <a href='https://www.linkedin.com/in/ishaanmehta4/' target='_blank'><span>Get in Touch</span></a>
                <a href='https://github.com/ishaanmehta4/bubbles/' target='_blank'><span>View on GitHub</span></a>
            </div>

        </div>
    )
}

export default Home