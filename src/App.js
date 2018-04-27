import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  Link
} from "react-router-dom";

//Home return to top buttons -- COMPLETE
//Animated home screen, reacts to mouse movement? -- COMPLETE
//circle/squared images on display - COMPLETE (with edits)
//may 18 personal dedline
//Lauch static / back end development begins
//All home page images need to like to album set, and then have a sliding javascript feature that shows the album name -- In Progress
//Album page needs to have a creative design that will represent the album name, date, and the model that is seen
//Need to create sub routes that when an image is clicked that album is brought up -- In Progress
//Create className to keep the buttons text from turning blue when it beconmes a link -- COMPLETE
//Change ALL html class tags to className

import canvas from './canvas.js';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Albums from './Albums.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="grid-x">
				    <div class="cell">
						  <div class="opening">
							  <canvas></canvas>
							  <script src="../src/canvas.js"></script>
						  	<button id="button1" class="button"><NavLink to = '/contact' style={{color: 'black'}}>Contact</NavLink></button>
							  <button id="button2" class="button"><NavLink to = '/about' style={{color: 'black'}}>About</NavLink></button>
                <button id="button4" class="button"><NavLink to = '/albums' style={{color: 'black'}}>Albums</NavLink></button>
							  <button id="button3" class="button"><NavLink to = '/' style={{color: 'black'}}>Home</NavLink></button>
						  </div>
					  </div>
			    </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path='/albums' component={Albums}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
