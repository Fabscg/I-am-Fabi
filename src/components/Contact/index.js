import React, { useState } from 'react';
import avatar from '../../assets/profile/avatar.jpg'
import { validateEmail } from '../../utils/helpers'


function Contact() {

    const [formState, setFormState] =
        useState({ name: "", email: "", message: "" });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is incorrect.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }


    return (

        <div className="contact-form">
            <div className="row ">
                <div className="col-lg-12 contact-img">
                    <img className="avatar" src={avatar} alt="my-avatar" />
                </div>



                <div id="contact" class="section db">
                    <div class="container">
                        <div class="section-title text-center">
                            <h3>Contact</h3>
                            <p className="contact-text">Swing by to have a coffee  <i class="fa-solid fa-mug-hot"></i> or contact me for some information</p>
                        </div>


                        <div className="row message">
                            <div className="col-md-12">
                                <div className="contact_form">
                                    <div id="message"></div>
                                    <form id="contactForm" onSubmit={handleSubmit} name="sentMessage" >
                                        <div className="row form-content">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" type="text" placeholder="Your Name" defaultValue={name} onBlur={handleChange} data-validation-required-message="Please enter your name." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="email" type="email" placeholder="Your Email" defaultValue={email} onBlur={handleChange} data-validation-required-message="Please enter your email address." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone" onBlur={handleChange} data-validation-required-message="Please enter your phone number." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="message" placeholder="Your Message" defaultValue={message} onBlur={handleChange} data-validation-required-message="Please enter a message."></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            {errorMessage && (
                                                <div className="col-lg-6">
                                                    <p className="error-text">{errorMessage}</p>
                                                </div>
                                            )}
                                            <div className="clearfix"></div>
                                            <div class="col-lg-12 text-center">
                                                <div id="success"></div>
                                                <button id="sendMessageButton" className="btn btn-outline-light btn-lg" type="submit"><span class="btn-text">Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Contact;