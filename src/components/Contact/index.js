import React from 'react';
import avatar from '../../assets/profile/avatar.jpg'
import emailjs from 'emailjs-com'
emailjs.init("WhVw6ilDpOLZnUdTU");

const Contact = () => {

    function submitEmail(e) {
        e.preventDefault()
       

        emailjs.sendForm("service_cigixvg", "template_im50s7d", e.target, 'WhVw6ilDpOLZnUdTU')
            .then((result) => {
                
            }).catch(err => console.log(err))
            e.target.reset()
    }


    return (

        <div className="contact-form">
        <h2>Contact</h2>
            <div className="row ">
                <div className="col-lg-12 contact-img">
                    <img className="avatar" src={avatar} alt="my-avatar" />
                </div>



                <div id="contact" className="section db">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Contact Me</h3>
                            <p className="contact-text">Swing by to have a coffee  <i className="fa-solid fa-mug-hot"></i> or contact me for some information</p>
                        </div>


                        <div className="row message">
                            <div className="col-md-12">
                                <div className="contact_form">
                                    <div id="message"></div>
                                    <form id="contactForm" name="sentMessage" onSubmit={submitEmail}>
                                        <div className="row form-content">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="user_name" id="name" type="text" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" name="user_email" id="email" type="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email address." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" name="user_number" id="phone" type="tel" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone number." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" placeholder="Your Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-lg-12 text-center">
                                                <div id="success"></div>
                                                <button id="sendMessageButton" className="btn btn-outline-light btn-lg" onClick="" type="submit"><span className="btn-text">Send Message</span></button>
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