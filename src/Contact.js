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
                        <div className='contactContent' id='contactInfo'>
                            <p>Zariah Dally</p>
                            <p>775-502-5629</p>
                            <p>Reno, NV</p>
                        </div>
                        <div className='VL' id='contactInfo'></div>
                        <div className='emailForm' id='contactInfo'>
                            <form action='mailto:jeremyleramian@outlook.com' method='post' encType='text/plain'>
                                Name:<br></br>
                                <input type="text" name="name"></input><br></br>
                                E-mail:<br></br>
                                <input type="text" name="mail"></input><br></br>
                                Comment:<br></br>
                                <input type="text" name="comment" size="50"></input><br></br>
                                <button className='button' type='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}