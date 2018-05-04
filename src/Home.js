import React from 'react';
import { Link, Route } from 'react-router-dom';
import $ from 'jquery';

//This page is using set px stylin for the location of the images, should change
//these to percentages to avoid having render issues when loading on smaller screens. -- COMPLETE -- TICKET CREATED

import Footer from './Footer.js';

export default class Home extends React.Component {
	componentDidMount() {

	}

    render() {

        return (
            <div>
                <div class="grid-x">
				    <div class="cell">
					    <div class="imageGalOne">
						    <h2>Featured Pieces</h2>
						    <hr></hr>
						    	<div class="photoBoundingBox1">
							    	<div class="photo">
										<img id='one' className='hover' data-featherlight={require('./images/img1.jpeg')} src={require('./images/img1.jpg')} />
										<img id='two' className='hover' data-featherlight={require('./images/img3.jpeg')} src={require('./images/img3.jpg')} />
										<img id='three' className='hover' data-featherlight={require('./images/img9.jpg')} src={require('./images/img9.jpg')} />
						    		</div>
								</div>
								<div class="photoBoundingBox2">
							    	<div class="photo2">
										<img id='four' className='hover' data-featherlight={require('./images/img5.jpg')} src={require('./images/img6.jpg')} />
										<img id='five' className='hover' data-featherlight={require('./images/img2.jpeg')} src={require('./images/img2.jpg')} />
										<img id='six' className='hover' data-featherlight={require('./images/img7.jpg')} src={require('./images/img7.jpg')} />
							    	</div>
						    	</div>
								<div class="photoBoundingBox3">
							    	<div class="photo3">
										<img id='seven' className='hover' data-featherlight={require('./images/img10.jpeg')} src={require('./images/img10.jpg')} />
										<img id='eight' className='hover' data-featherlight={require('./images/img11.jpeg')} src={require('./images/img11.jpg')} />
										<img id='nine' className='hover' data-featherlight={require('./images/img12.jpeg')} src={require('./images/img12.jpg')} />
							    	</div>
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
