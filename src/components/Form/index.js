import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./styles.css";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
 
/**
 * @component Form
 * @props - { object } -  config
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null
    };
  }
  /**
  * @function handleFormSubmit
  * @param e { obj } - form event
  * @return void
  */
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };
  /**
    * @function handleChange
    * @param e { obj } - change event
    * @param field { string } - namve of the field
    * @return void
    */
  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {
    const { title, subtitle, successMessage, errorMessage, fieldsConfig, btn } = this.props.config;
    return (
      <div className="container box style3">
        <header>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </header>
        <div>
          <form action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => this.handleChange(e, field.fieldName)}
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => this.handleChange(e, field.fieldName)} value={field.name} />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
              <br/>
              <GoogleReCaptchaProvider reCaptchaKey="6LdpU8MZAAAAAHHHfCl6RcWI31apVoSVmAhlzY1l">                
              </GoogleReCaptchaProvider>
            <br/>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value={btn} />
            <div>
              {this.state.mailSent && <div className="sucsess">{successMessage}</div>}
              {this.state.error && <div className="error">{errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
//propTypes for the component
Form.propTypes = {
  config: PropTypes.object.isRequired
};
