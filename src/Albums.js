import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  Link
} from "react-router-dom";
import $ from 'jquery';

import Footer from './Footer.js';
import MarchOne from './MarchOne.js';

//All albums will be laid out accroding to the date and year they were published, albums will descend new -> old
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
                                <hr></hr>
                            </div>
                            <div className='a2018'>
                                <img className="myImg" id='ap1'src={require('./images/April_2018/1.jpg')} alt="Photo Caption" />
                                <img className="myImg" id='ap2'src={require('./images/April_2018/2.jpg')} alt="Photo Caption" />
                            </div>
                            <br></br>
                            <div className='sidebar'>
                                <p>March, 2018</p>
                                <hr></hr>
                            </div>
                            <div className='mar2018'>
                              <img className="myImg" id='marchOne'src={require('./images/March_2018/march1sm.jpeg')} alt="Photo Caption" />
                              <img className="myImg" id='marchTwo'src={require('./images/March_2018/March_8_2018/march2.jpg')} alt="Photo Caption" />
                              <img className="myImg" id='marchThree'src={require('./images/March_2018/March_8_2018/march3sm.jpeg')} alt="Photo Caption" />
                              <img className="myImg" id='marchFour'src={require('./images/March_2018/March_8_2018/march4sm.jpeg')} alt="Photo Caption" />
                            </div>
                            <div className='sidebar'>
                              <p>February, 2018</p>
                              <hr></hr>
                            </div>
                            <div className='feb2018'>
                              <img className="myImg" id='Feb1' src={require('./images/March_2018/Feb_18_2018/feb1sm.jpeg')} alt="Photo Caption" />
                              <img className="myImg" id='Feb2' src={require('./images/March_2018/Feb_18_2018/feb2sm.jpeg')} alt="Photo Caption" />
                              <img className="myImg" id='Feb3' src={require('./images/March_2018/Feb_18_2018/feb3sm.jpeg')} alt="Photo Caption" />
                              <img className="myImg" id='Feb4' src={require('./images/March_2018/Feb_18_2018/feb4sm.jpeg')} alt="Photo Caption" />
                            </div>
                            <div className='sidebar'>
                              <p>January, 2018</p>
                              <hr></hr>
                            </div>
                            <div className='jan2018'>

                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
