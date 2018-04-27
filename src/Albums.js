import React from 'react';

import Footer from './Footer.js';

//All albums will be laid out accroding to the date and year they were published, albums will descend new > old

export default class Albums extends React.Component {
    render() {
        return (
            <div>
				<div className='grix-x'>
                    <div className='cell'>
                        <div className='albumContent'>
                            <h2>Albums</h2>
                            <hr></hr>
                            <div className='sidebar'>
                                <p>April, 2018</p>
                            </div>
                            <div className='a2018'>
                                <img id='ap1' src={require('./images/April_2018/1.jpg')} />
                                <img id='ap2' src={require('./images/April_2018/2.jpg')} />
                            </div>
                            <hr></hr>
                            <div className='sidebar'>
                                <p>March, 2018</p>
                            </div>
                            <div className='mar2018'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}