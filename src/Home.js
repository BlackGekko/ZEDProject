import React from 'react';

//The images inside the imageGalOne div will not display on the page
//This may be due to the images being a transparent png that React is not recognizing

export default class Home extends React.Component {
    render() {
        return (
            <div>
				<div class="grid-x">
					<div class="cell">
						<div class="opening">
							<canvas></canvas>
							<script src="../src/canvas.js"></script>
						</div>
					</div>
				</div>
                <div class="grid-x">
				    <div class="cell">
					    <div class="imageGalOne">
						    <h2>Image Gallery 1</h2>
						    <hr></hr>
						    <div class="photoBoundingBox">
							    <div class="photo">
									<img src={require('./circ.png')} />
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
            </div>
        );
    }
}