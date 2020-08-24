import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './components/Projects.js';
import Articles from './Articles.js'; 
import About from './About.js'; 
import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import Landing from './components/Landing.js';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    </BrowserRouter>
  );
}
 
export default App;