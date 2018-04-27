import React from 'react';

import Footer from './Footer.js';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="grid-x">
				    <div class="cell">
					    <div class="imageGalOne">
						    <h2>Image Gallery 1</h2>
						    <hr></hr>
						    <div class="photoBoundingBox1">
							    <div class="photo">
									<img id='one' src={require('./circ.png')} />
									<img id='two' src={require('./circ.png')} />
									<img id='three' src={require('./circ.png')} />
							    </div>
						    </div>
							<div class="photoBoundingBox2">
							    <div class="photo2">
									<img id='four' src={require('./circ.png')} />
									<img id='five' src={require('./circ.png')} />
									<img id='six' src={require('./circ.png')} />
							    </div>
						    </div>
							<div class="photoBoundingBox3">
							    <div class="photo3">
									<img id='seven' src={require('./circ.png')} />
									<img id='eight' src={require('./circ.png')} />
									<img id='nine' src={require('./circ.png')} />
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