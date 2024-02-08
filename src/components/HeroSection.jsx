import React from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    console.log("Working Fine HeroSection.js")
    return (
        <div className='hero-container'>
            <video src='/videos/video-5.mp4' autoPlay={true} loop muted/>
                {/* <img src='../public/images/img-home.jpg'/> */}
            {/* <video controls>
                <source src='../public/videos/video-2.mp4' type='video/mp4' />
            </video> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started

                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'></i>

                </Button>
            </div>

        </div>
    )
}

export default HeroSection;
