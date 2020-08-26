import React , {Component} from 'react';
import Form from './Form';

/**
 * @config prepareing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
  api: `${process.env.REACT_APP_API}`,
  title: 'Contacto',
  subtitle: "Escribanos y nos pondremos en contacto lo más pronto posible.",
  successMessage: 'Gracias por contactarme.',
  errorMessage: 'Lo sentimos, estamos presentando inconvenientes.',
  btn: 'Enviar mensaje',
  fields:{
    name: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: '', fieldName: 'name', type: 'text',placeholder:'Nombre', isRequired: true , klassName:'6u 12u$(mobile) name-field'},
   { id: 3, label: '', fieldName: 'email', type: 'email', placeholder: 'Email', isRequired: true , klassName:'6u$ 12u$(mobile) email-field'},
   { id: 4, label: '', fieldName: 'msg', type: 'textarea',placeholder:'Escribe tu mensaje...', isRequired: true , klassName:'12u$ message-field'}
  ]
}

class Contact extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (
            <div>
                <Form config={config} />
            </div>
        )
    }
}
 
export default Contact;