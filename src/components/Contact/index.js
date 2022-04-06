import React from 'react';
import avatar from '../../assets/profile/avatar.jpg'

function Contact() {
    return (

        <div className="contact-form">
            <div className="row contact-img">
                <div className="col-lg-12">
                    <img className="avatar" src={avatar} alt="my-avatar" />
                </div>

           

                <div id="contact" class="section db">
                    <div class="container">
                        <div class="section-title text-center">
                            <h3>Contact</h3>
                            <p className="contact-text">Swing by to have a coffee  <i class="fa-solid fa-mug-hot"></i> or contact me for some information</p>
                        </div>


                        <div class="row message">
                            <div class="col-md-12">
                                <div class="contact_form">
                                    <div id="message"></div>
                                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input class="form-control" id="name" type="text" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name." />
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input class="form-control" id="email" type="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email address." />
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone number." />
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="form-group">
                                                    <textarea class="form-control" id="message" placeholder="Your Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div class="col-lg-12 text-center">
                                                <div id="success"></div>
                                                <button id="sendMessageButton" className="btn btn-outline-light" type="submit"><span class="btn-text">Send Message</span></button>
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