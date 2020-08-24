import React , {Component} from 'react';
import back01 from '../images/slider1.jpg';
import back02 from '../images/slider2.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (
            <div>
                <article className="container box style3" id="contacto">
                    <header>
                        <h2>Contacto</h2>
                        <p>Escribanos y nos pondremos en contacto lo más pronto posible.</p>
                    </header>
                    <form method="POST" action="#contacto" enctype="multipart/form-data">
                        <div className="row 50%">
                            <input type="hidden" name="action" value="submit"/>
                            <div className="6u 12u$(mobile)"><input type="text" className="text" name="name" placeholder="Nombre" disabled="disabled"/></div>
                            <div className="6u$ 12u$(mobile)"><input type="text" className="text" name="email" placeholder="Correo" disabled="disabled"/></div>
                            <div className="12u$">
                                <textarea name="message" placeholder="Mensaje" disabled="disabled"></textarea>
                            </div>
                            <div className="12u$">
                                <ul className="actions">
                                    <li><input type="submit" value="Enviar Mensaje" disabled="disabled"/></li>
                                </ul>
                            </div>
                        </div>
                    </form>
			    </article>
            </div>
        )
    }
}
 
export default Contact;