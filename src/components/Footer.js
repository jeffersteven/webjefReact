import React , {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (
            <div>
                <section id="footer">
                    <ul className="icons">
                        <li><a className="icon fa-envelope-o"><span className="label"></span></a></li>contacto@webjef.com<br />
                        <li><a className="icon fa-envelope-o"><span className="label"></span></a></li>jeffersteven@webjef.com<br />
                        <li><a className="icon fa-phone-square"><span className="label"></span></a></li>+57 305 737 4440<br />
                        <li><a className="icon fa-instagram" href="https://www.instagram.com/webjef_com/" rel="publisher" target="_blank"><span className="label"></span></a></li>Instagram<br />
                        
                    </ul>
                    <div className="copyright">
                        <ul className="menu">
                            <li>&copy; Copyright. Todos los derechos reservados.</li><li>Diseño: <a href="webjef.pro-pages.com">Webjef</a>.</li>
                            
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
 
export default Footer;