import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
    console.log("Working fine from Home.js")
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />


        </>
    );
}

export default Home;
