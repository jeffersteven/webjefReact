import React, {Component} from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import Landing from './components/Landing.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { loadReCaptcha } from 'react-recaptcha-google'
 
class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App" id="top">
          <Route exact path="/" component={Landing} />
        </div>
        <AnchorLink href='#top' className="button style btnbottom scrolly-middle"><FontAwesomeIcon icon={faArrowAltCircleUp} /></AnchorLink>
      </BrowserRouter>
    );
  }
}
 
export default App;