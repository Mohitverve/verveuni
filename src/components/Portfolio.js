import React from 'react';
import '../styles/portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio hidden" id="portfolio-loc">
                <h1>Our Services</h1>
                <div className="portfolio-cards">
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/newv.png" alt="Book VR sessions" />
                        <div className="overlay">
                            <div className='service'>
                                <h3>Book VR sessions</h3>
                                <p>
                                    Book VR sessions, get VR headsets, Mobile devices and a high quality Content library
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/imgb.png" alt="Providing content library" />
                        <div className="overlay">
                            <div className='service'>
                                <h3>Buy Content</h3>
                                <p>
                                    Now easily subscribe to our Subscription plans to enjoy our content without needing to book a session
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/imgf.png" alt="Setting up Tech" />
                        <div className="overlay">
                            <div className='service'>
                                <h3>Delivery Partner</h3>
                                <p>
                                    For easy delivery, we have our delivery program, be one of our delivery partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
