import React from 'react'
import CardItem from './CardItem'
// import { useEffect } from 'react';
import './Cards.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Cards() {
    console.log("Cards component working fine")
    // useEffect(()=>{
    //     AOS.init();
    //     console.log("AOS animation running")

    // },[])

    return (
        <div className='cards'>
            <h1>Check it Out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items" >
                        <CardItem
                            src='images/img-9.jpg'
                            text="Find the hidden talent"
                            label='Adventure'
                            path='/services'
                        />

                        <CardItem
                            
                            src='images/img-8.jpg'
                            text="Explore whatever you want"
                            label='Adventure'
                            path='/services'
                        />

                        <CardItem
                            src='images/img-8.jpg'
                            text="Explore whatever you want"
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text="Find the hidden talent"
                            label='Adventure'
                            path='/services'
                        />

                        <CardItem
                            src='images/img-8.jpg'
                            text="Explore whatever you want"
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
