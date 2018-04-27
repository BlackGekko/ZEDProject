import React from 'react';

//The images inside the imageGalOne div will not display on the page
//This may be due to the images being a transparent png that React is not recognizing

import Footer from './Footer.js';

export default class About extends React.Component {
    render() {
        return (
            <div>
				<div className='grid-x'>
                    <div className='cell'>
                        <div className='bio'>
                            <h2>Zariah Dally</h2>
                            <hr></hr>
                        </div>
                        <div className='content'>
                            <img id='headShot' className='bioContent' src={require('./images/Zariah.png')} />
                            <div className='bioContent'>
                                <p>I'm a photographer, filmmaker and published writer.</p>
                                <p>I've been traveling nonstop;for 6 year throughout America documenting my adventurers for people to see.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}