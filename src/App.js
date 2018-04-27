import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//Home return to top buttons
//Animated home screen, reacts to mouse movement? -- COMPLETE
//circle/squared images on display
//may 18 personal dedline
//Lauch static / back end development begins
//All home page images need to like to album set, and then have a sliding javascript feature that shows the album name
//Album page needs to have a creative design that will represent the album name, date, and the model that is seen

//Chane ALL html class tags to className

import canvas from './canvas.js';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

//Create className to keep the buttons text from turning blue when it beconmes a link -- COMPLETE


export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div class="grid-x">
				    <div class="cell">
						  <div class="opening">
							  <canvas></canvas>
							  <script src="../src/canvas.js"></script>
						  	<button id="button1" class="button"><NavLink to = '/contact' style={{color: 'black'}}>Contact</NavLink></button>
							  <button id="button2" class="button"><NavLink to = '/about' style={{color: 'black'}}>About</NavLink></button>
							  <button id="button3" class="button"><NavLink to = '/' style={{color: 'black'}}>Home</NavLink></button>
						  </div>
					  </div>
			    </div>
          <div className = "content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
