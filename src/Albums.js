import React from 'react';
import $ from 'jquery';

import Footer from './Footer.js';

//All albums will be laid out accroding to the date and year they were published, albums will descend new > old
//Impliment JQUERY class access to find what image is being clicked to display the modal image -- IN PROGRESS

export default class Albums extends React.Component {

  componentDidMount()
  {
    var modal = document.getElementById('myModal');

      var img = $('.myImg');
      var imgID = $('.myImg').attr('id' + 'Full');
      var modalImg = $(imgID);
      console.log(imgID);
      var captionText = document.getElementById("caption");
      $('.myImg').click(function(){
          modal.style.display = "block";
          var newSrc = this.src;
          modalImg.attr('src', newSrc);
          captionText.innerHTML = this.alt;
      });

      var span = document.getElementsByClassName("close")[0];

      span.onclick = function() {
        modal.style.display = "none";
      }
  }

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
                                <img className="myImg" id='ap1' src={require('./images/April_2018/1.jpg')} alt="Photo Caption" />
                                <img className="myImg" id='ap2' src={require('./images/April_2018/2.jpg')} alt="Photo Caption" />
                            </div>

                            <div id="myModal" class="modal">

                              <span class="close">&times;</span>

                              <img id='ap1Full' src={require('./images/April_2018/1.jpeg')} />

                              <div id="caption"></div>
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
