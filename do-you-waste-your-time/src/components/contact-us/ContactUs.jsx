import React from 'react';
import './ContactUs.scss';
import {CONTACT_US_TITLE} from '../../data';
import BackToHome from '../common/back-to-home/BackToHome';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  componentWillMount () {
    document.title = CONTACT_US_TITLE;
  }

  render() {
    const { status } = this.state;
    
    return (
      <>
      <div className="form-container">
        <div className="heading">Tell us how you're managing your time. Best advices will be published on our website.</div>
        <div className="form-logo-container">
          <img src="/undraw_Letter_re_8m03.png" alt="mail-logo" className="mail-logo"/>
          
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xzbkdekw"
            method="POST"
            className="contact-us-form"
          >
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea name="message"></textarea>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
      <BackToHome/>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactUs;