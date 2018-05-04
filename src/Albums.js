import React from 'react';
import $ from 'jquery';

import Footer from './Footer.js';

//All albums will be laid out accroding to the date and year they were published, albums will descend new > old
//Impliment JQUERY class access to find what image is being clicked to display the modal image -- IN PROGRESS

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
                                <img className="myImg" id='ap1' data-featherlight={require('./images/April_2018/1.jpeg')} src={require('./images/April_2018/1.jpg')} alt="Photo Caption" />
                                <img className="myImg" id='ap2' data-featherlight={require('./images/April_2018/2.jpeg')} src={require('./images/April_2018/2.jpg')} alt="Photo Caption" />
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
