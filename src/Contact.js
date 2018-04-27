import React from 'react';

import Footer from './Footer.js';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
				<div className='grid-x'>
                    <div className='cell'>
                        <div className='contact'>
                            <h2>Contact Me</h2>
                            <hr></hr>
                        </div>
                        <div className='contactContent'>
                            <p>Zariah Dally</p>
                            <p>775-502-5629</p>
                            <p>Reno, NV</p>
                        </div>
                        <div className='emailForm'>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}