import React, { useState, useEffect } from 'react';
import './blog.css';
import blogNewImage from '../../BlogImageFullPage.png'
import typeWriter from '../../typeWriter.jpg';
import blogContentImage from '../../blogImage.jpg';
import Email from '../../component/email/email';

export default function Blog() {
    const [blogList, setBlogList] = useState([])
    const [latest, setLatest] = useState([])
    const [readMore, setReadMore] = useState(false);
    let descriptionLength

    useEffect(() => {
        fetchAllBlog()
        fetchLatestBlog()
    }, [])

    const fetchLatestBlog = async () => {
        const response = await fetch(
            "https://restapicheckerapi-production.up.railway.app/api/latest_blog"
        );
        const latestdata = await response.json();
        setLatest(latestdata)
    }

    const fetchAllBlog = async () => {
        const response = await fetch(
            "https://restapicheckerapi-production.up.railway.app/api/all_blogs"
        );
        // const imageURL = await response.blob();
        // console.log(imageURL, 'img')
        const data = await response.json();
        console.log(data)
        setBlogList(data)
    };

    const latestRedirect = () => {
        window.open(latest[4], '_blank')
    }

    const latestBlog = () => {
        return (
            <>
                <div className='latestBlogtitle'>{latest[2]}</div>
                <div className='content'>{latest[3]}</div>
                <br />
                <button class="showButton" onClick={latestRedirect}>
                    <a href={latest[4]} target="_blank">
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Full Blog</span>
                        </span>
                    </a>
                </button>
                <div className='blogListtitle'>Wanna Read more? Here we are...</div>
                {BlogArrayDisplay(blogList, 3)}


            </>
        )
    }

    const BlogArrayDisplay = (arrays, limit) => {
        const [showAll, setShowAll] = useState(false);
        const displayArrays = showAll ? arrays : arrays.slice(0, limit);

        return (
            <>
                <div className='blogList parentCardBlog'>
                    {displayArrays.map((arr, index) => (
                        // <div className='blogList parentCardBlog'>
                        //     <div className="cardBlog">
                        //         <a href={arr[4]} target="_blank">
                        //             <img src={blogContentImage} className="blogimg"></img>
                        //             {console.log(arr[5].toString(), arr[5], 'Image')}
                        //             <div className='episodeHeading'>{arr[3]}</div>
                        //         </a>
                        //     </div>
                        // </div>
                        <div class="projcard-container">

                            <div class="projcard projcard-blue">

                                <div class="projcard-innerbox">
                                    <img class="projcard-img" src={blogContentImage} />
                                    <div class="projcard-textbox">
                                        <div class="projcard-title">{arr[2]}</div>
                                        <div class="projcard-bar"></div>
                                        <div>
                                            {/* <img src={quotes1} className='quotes'></img> */}
                                            <div class="projcard-description">{arr[3]}</div>
                                            {/* <img src={quotes2} className='quotesend'></img> */}
                                        </div>
                                        <div class="projcard-tagbox">
                                            <span class="projcard-tag">{arr[1]}</span>
                                            <span class="projcard-tag">Mano</span>
                                        </div>
                                        <a href={arr[4]} target="_blank">
                                            <button class="readmore-btn">
                                                <span class="book-wrapper">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="rgb(86, 69, 117)"
                                                        viewBox="0 0 126 75"
                                                        class="book"
                                                    >
                                                        <rect
                                                            stroke-width="3"
                                                            stroke="#fff"
                                                            rx="7.5"
                                                            height="70"
                                                            width="121"
                                                            y="2.5"
                                                            x="2.5"
                                                        ></rect>
                                                        <line stroke-width="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M25 20H50"
                                                        ></path>
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M101 20H76"
                                                        ></path>
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M16 30L50 30"
                                                        ></path>
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M110 30L76 30"
                                                        ></path>
                                                    </svg>

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 65 75"
                                                        class="book-page"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M40 20H15"
                                                        ></path>
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-width="4"
                                                            stroke="#fff"
                                                            d="M49 30L15 30"
                                                        ></path>
                                                        <path
                                                            stroke-width="3"
                                                            stroke="#fff"
                                                            d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span class="text"> Read more </span>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {arrays.length > 6 && !showAll && (
                    // <button onClick={() => setShowAll(true)}>Show All</button>
                    <button class="showAllButton" onClick={() => setShowAll(true)}>
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Show All</span>
                        </span>
                    </button>
                )}
            </>
        );
    };


    return (
        <div>
            <div>
                <img src={typeWriter} class="splitepisode leftEpisode" />
                {/* <img src={blogNewImage} class="blogBackground" /> */}
                <div class="splitepisode rightBlog">
                    <div className='centeredEpisode'>
                        <h1 className='blogTitle'>Blog</h1>
                    </div>
                </div>
                <div>
                    <img src={blogNewImage} className='imageBlog'></img>
                    <div className='centeredEpisode'>
                        <h1 className='episodeTitle'>Blog</h1>
                    </div>
                </div>
                {latestBlog()}
            </div>
            <Email />
        </div>
    )
}