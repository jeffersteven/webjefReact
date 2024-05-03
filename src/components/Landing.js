import React , {Component} from 'react';
import Headers from './Headers.js';
import Projects from './Projects.js';
import Background from './Background.js';
import Content02 from './Content02.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

class Landing extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (    
            <div>        
                <Background/>
                <Headers/>
                <Content02/>
                <Projects/>
                {/* <Contact/> */}
                <Footer/>
            </div>
        )
    }
}
 
export default Landing;