import React from 'react';

//Both social media logos need to be spread apart as they overlap in the middle
//Fix home achor from redirecting page to #top

export default class Footer extends React.Component {
    render() {
        return(
            <div>
                <div className="grid-x">
				    <div className="cell">
					    <div className="footer">
						    <p>© ZED Project</p>
                            <img id='facebook' src={require('./Facebook.jpg')} />
                            <img id='Instagram' src={require('./Instagram.jpg')} />
                            <a href="#/" className='minText'>Back to top of page</a>
					    </div>
				    </div>
			    </div>
            </div>
        );
    }
}