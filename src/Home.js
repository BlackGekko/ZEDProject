import React from 'react';

import Footer from './Footer.js';

export default class Home extends React.Component {
    render() {
		
        return (
            <div>
                <div class="grid-x">
				    <div class="cell">
					    <div class="imageGalOne">
						    <h2>Featured Albums</h2>
						    <hr></hr>
						    	<div class="photoBoundingBox1">
							    	<div class="photo">
										<img id='one' className='hover'src={require('./images/img1.jpg')} />
										<img id='two' className='hover' src={require('./images/img3.jpg')} />
										<img id='three' className='hover' src={require('./images/img9.jpg')} />
						    		</div>
								</div>
								<div class="photoBoundingBox2">
							    	<div class="photo2">
										<img id='four' className='hover' src={require('./images/img6.jpg')} />
										<img id='five' className='hover' src={require('./images/img2.jpg')} />
										<img id='six' className='hover' src={require('./images/img7.jpg')} />
							    	</div>
						    	</div>
								<div class="photoBoundingBox3">
							    	<div class="photo3">
										<img id='seven' className='hover' src={require('./images/img10.jpg')} />
										<img id='eight' className='hover' src={require('./images/img11.jpg')} />
										<img id='nine' className='hover' src={require('./images/img12.jpg')} />
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