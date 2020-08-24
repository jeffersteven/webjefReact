import React , {Component} from 'react';
import BackgroundSlider from 'react-background-slider';
import slider01 from '../images/slides/slide1.jpg';
import slider02 from '../images/slides/slide2.jpg';
import slider03 from '../images/slides/slide3.jpg';
import slider04 from '../images/slides/slide4.jpg';
import slider05 from '../images/slides/slide5.jpg';
import slider06 from '../images/slides/slide6.jpg';

class Background extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (     
            <BackgroundSlider
            images={[slider01,slider02,slider03,slider04,slider05,slider06]}
            duration={10} transition={2} />
        )
    }
}
 
export default Background;