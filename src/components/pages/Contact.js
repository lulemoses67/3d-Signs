import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wp6p117', 'template_yecbclo', form.current, {
        publicKey: '02_13jWJYcW6rgSkP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return ( 
        <>
            <section className="hero reveal fade-in bg-dark text-white row align-center">
                <div className="container">
                    <div className="row-content">
                        <h3 className="section-title">Contact Imformation</h3>
                        <p>An integrated comprehensive sign company, specializing in the production of various house signs, LED luminous characters, advertising light boxes, outdoor signs, etc. We are committed to providing customers with one-stop sign industry chain services</p>
                        <br/>
                        <div>
                            <h2>Contact</h2>
                            <p><i class="fa-solid fa-phone text-success"></i> <Link to="tel:+256 704280086">+256 704280086</Link></p>
                            <p><i class="fab fa-whatsapp text-success"></i> <Link to="tel:+256 788252428">+256 788252428</Link></p>
                            <p><i class="fa-solid fa-envelope text-success"></i> <Link to="dennisbwamiki77@gmail.com"> dennisbwamiki77@gmail.com</Link></p>
                            <p><i class="fa-solid fa-location text-success"></i> Kamapla, Uganda</p>
                            <p><i class="fab fa-facebook text-primary"></i> <Link to="3">3d Signs</Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reveal fade-in">
                <div className="container">
                    <h3 className="section-title">Drop your message</h3>
                    <div className="row row-content">
                        <div className="col-12">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-element">
                                    <label htmlFor="fullname">Full name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Full name" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" required></textarea>
                                </div>
                                <div className="btn-group-rt">
                                    <button type="submit" className="btn-primary"><i className="fa fa-angles-right"></i> Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' reveal fade-in'>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.884411649364!2d32.505991114834806!3d0.36905864127008126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177da54f61f3eb5b%3A0x1a1ed9bd2b669c3d!2sNansana!5e0!3m2!1sen!2sug!4v1728816147222!5m2!1sen!2sug" width="100%" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </section>
        </>
     );
}
 
export default Contact;