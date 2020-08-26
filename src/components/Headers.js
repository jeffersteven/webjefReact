import React , {Component} from 'react';
import logowj from '../images/logowj.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Headers extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (
            <section id="header">
                <header className="logoi">
                    <div className="divlogo">
                        <img src={logowj} alt="Logo Webjef"/>
                    </div>
                </header>
                <footer>
                    <AnchorLink href='#banner'><a className="button style2 scrolly-middle">Iniciar</a></AnchorLink>
                </footer>				
                {/* <!--Thumbnail Navigation--> */}
                <div id="prevthumb"></div>
                <div id="nextthumb"></div>				
                {/* <!--Arrow Navigation--> */}
                <a id="prevslide" className="load-item"></a>
                <a id="nextslide" className="load-item"></a>				
                <div id="thumb-tray" className="load-item">
                    <div id="thumb-back"></div>
                    <div id="thumb-forward"></div>
                </div>				
                {/* <!--Time Bar--> */}
                <div id="progress-back" className="load-item">
                    <div id="progress-bar"></div>
                </div>				
                {/* <!--Control Bar--> */}
                <div id="controls-wrapper" className="load-item">
                    <div id="controls">
                        
                        <a id="play-button"><img id="pauseplay" alt="pause" src="img/pause.png"/></a>
                    
                        {/* <!--Slide counter--> */}
                        <div id="slidecounter">
                            <span className="slidenumber"></span> / <span className="totalslides"></span>
                        </div>
                        
                        {/* <!--Slide captions displayed here--> */}
                        <div id="slidecaption"></div>
                        
                        {/* <!--Thumb Tray button--> */}
                        <a id="tray-button"><img id="tray-arrow" alt="arrow" src="img/button-tray-up.png"/></a>
                        
                        {/* <!--Navigation--> */}
                        <ul id="slide-list"></ul>						
                    </div>
                </div>
            </section>    
        )
    }
}
 
export default Headers;