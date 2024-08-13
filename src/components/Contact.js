import React from 'react'
import '../styles/verve.css'

const Contact = () => {
  return (
    <div>
        <div className="contact-section hidden" id="contact">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <h3>Get In Touch With Us</h3>
                    <p>Have questions or want to get in touch? Fill out the form below:</p>
                    <div className="contact-details">
                        <div className="detail">
                            <a href="tel:9315941574" aria-label="Phone Number">
                                <i className="fas fa-phone-alt"></i>
                            </a>
                            <div>
                                <h4>Phone Number</h4>
                                <p><a href="tel:9315941574">9315941574</a></p>
                            </div>
                        </div>
                        <div className="detail">
                            <a href="mailto:support@verveuni.com" aria-label="Email Address">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <div>
                                <h4>Email Address</h4>
                                <p><a href="mailto:support@verveuni.com">support@verveuni.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" aria-label="Your Name" />
                        <input type="email" placeholder="Your Email" aria-label="Your Email" />
                        <input type="text" placeholder="Your Phone" aria-label="Your Phone" />
                        <textarea placeholder="Your Message" aria-label="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default Contact
