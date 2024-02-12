import React, { useState } from 'react';
import './about.css';
import about from '../../about.jpg'
import aboutMike from '../../aboutMike.png'
import { Button, Card, CardContent, TextField } from '@mui/material';
import Email from '../../component/email/email';
import mano from '../../Mano.jpg'
import manoNew from '../../manoNew.jpg'

export default function About() {
    const [manoVisibleDetails, manoSetVisibleDetails] = useState(false);
    const [madhuVisibleDetails, madhuSetVisibleDetails] = useState(false);
    const handleManoClick = () => {
        manoSetVisibleDetails(!manoVisibleDetails)
    }

    const handleMadhuClick = () => {
        madhuSetVisibleDetails(!madhuVisibleDetails)
    }

    return (
        <div>
            <div>
                <img src={aboutMike} class="splitabout left" style={{ height: '100vh' }} />
                <div class="splitabout rightabout" style={{ height: '100vh' }}>
                    <div class="centeredabout">
                        <div className='aboutdes'>Hi guys!!! Welcome to Snooping Around. A Podcast form Madhu, Lahari, Mano and friends, This podcast is nothing specific and it is open each and every week you can listen about intresting facts , Economics, Indian History , Culture sometimes political conversation and lot more... We would like to Explore to make you more curious .</div>
                    </div>
                </div>

                <div className='abouttitle'>Meet Our Team!</div>
                <div>


                    <div>
                        <a><img src={manoNew} onClick={handleManoClick} className='manoImg'></img></a>
                        <div className='manoName'>Mano Aravind Thiyagarajan</div>
                        <div className='manodes'>Content Writer</div>
                        {manoVisibleDetails && <div class="aboutcard">
                            <div class="aboutcard-content">
                                <p class="aboutcard-description">The Writer... Always wishes to be addressed as a writer with lots on excitements on putting out his views in his own style. He makes short films, stories and poetries and of course the content writer of our BlogCast! Aspirations ahead, he has all his friends and family by his side helping him out in reaching wherever he needed to. He is happy to be collaborated here. If some words of our podcast hits you hard and makes you offended, you can think of him.
                                    Happy reading!!!.</p>
                            </div>
                        </div>}
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>

                        <a><img src={manoNew} onClick={handleMadhuClick} className='manoImg'></img></a>
                        <div className='manoName'>Madhumitha Selvaraj</div>
                        <div className='manodes'>Host</div>
                        {madhuVisibleDetails && <div class="aboutcard">
                            <div class="aboutcard-content">
                                <p class="aboutcard-description">The Moderator...Basically a Front end Designer. Being bored out with all her office works, she started this podcast called Snooping Around (The founder) and here we are with all our upgrades. She is dominant with her voice and all her tones that greatly help her in presenting situations closer to reality. Of course, her accent may be quiet exigent but you will get used to it. “Welcome back to yet another episode of”, you will come across this phrase in all our podcasts and that’s our host’s signature. Check out our speaker and make your ears open as this is Snooping Around!!!
                                </p>
                            </div>
                        </div>}

                    </div>


                </div>

            </div>
            <Email />
        </div>
    )
}