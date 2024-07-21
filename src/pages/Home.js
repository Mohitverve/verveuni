import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase';
import '../styles/verve.css';

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const carouselImages = [
        "/images/s4.jpg",
        "/images/s1.jpg",
        "/images/s2.jpg",
        "/images/s3.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                (prevSlide + 1) % carouselImages.length
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [carouselImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide + 1) % carouselImages.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + carouselImages.length) % carouselImages.length
        );
    };

    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const faqData = [
        {
            question: "What is Virtual Reality?",
            answer: "Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet."
        },
        {
            question: "How and when can I book sessions?",
            answer: "As of now we have not launched our services in the market but we plan on launching by the end of this year and our services will be open."
        },
        {
            question: "Who can book these sessions?",
            answer: "Schools, colleges, and private institutions can book our sessions while individuals can subscribe to our membership plans for our content library."
        },
        {
            question: "Do we get VR headsets too?",
            answer: "Our session includes VR headsets, mobile devices, content library, and an onsite team to setup and help with the session."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const logout = () => {
        signOut(auth).then(() => {
            window.location.href = '/Register';
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

 

    if (isAuthenticated === false) {
        return <Navigate to="/Register" />;
    }

    

    return (
        <div>
            <section className="hero hidden">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="marquee">
                                <div className="marquee-content">
                                    <span>
                                        Bored of reading on what date Mughal empire came? Book a session with us and explore the Mughal empire's rise with a front seat to their king's council and a bird's eye view to the wars they fought
                                    </span>
                                    <span>
                                        Bored of reading on what date Mughal empire came? Book a session with us and explore the Mughal empire's rise with a front seat to their king's council and a bird's eye view to the wars they fought
                                    </span>
                                </div>
                            </div>
                            <nav>
                                <div className="nav-container">
                                    <div className="hamburger" onClick={toggleNav}>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                    </div>
                                    <a className="logo">VerveIN</a>
                                    <div className="nav-logo">
                                        <a href="#logo">
                                            <img loading="lazy" src="/images/vervein.png" alt="VerveIN" />
                                        </a>
                                    </div>
                                    <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
                                        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
                                        <ul>
                                            <li><Link to="#about-us">About</Link></li>
                                            <li><Link to="#portfolio-loc">Services</Link></li>
                                            <li><Link to="/Book">Book session</Link></li>
                                            <li><Link to="#FAQ">FAQs</Link></li>
                                            <li><Link to="#">Contact us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-search">
                                        <input type="text" placeholder="All results..." />
                                    </div>
                                    <div className="nav-actions">
                                       <button className='btn-signup' onClick={logout}>Sign Out</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="hero-left">
                                <h1>
                                    Welcome to <span>VERVE</span>
                                    <br />
                                    A new revolution for <span>Education</span> with <span>VR</span>
                                </h1>
                                <p>
                                    A new revolution for <span>Education</span> with <span>VR</span>
                                </p>
                                <div className="button-row">
                                    <a href="#show" className="button black-btn">Show Interest</a>
                                </div>
                            </div>
                            <div className="hero-right">
                                <div className="carousel-container">
                                    <div className="carousel">
                                        {carouselImages.map((img, index) => (
                                            <div
                                                key={index}
                                                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                                            >
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="prev-btn" onClick={prevSlide}>&#8249;</button>
                                    <button className="next-btn" onClick={nextSlide}>&#8250;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-us" className="hidden">
                <div className="container">
                    <div className="row">
                        <div className="about-left">
                            <img className="img" loading="lazy" src="/images/3.jpg" alt="About Us" width="100%" />
                        </div>
                        <div className="about-right">
                            <h2>About Us</h2>
                            <h3>EdTech Platform</h3>
                            <p>
                                At VerveIN, we're revolutionizing education by bringing immersive virtual reality experiences straight to your institution's doorstep.
                            </p>
                            <span>
                                With our user-friendly website, you can easily schedule VR simulation sessions for captivating science experiments, engaging historical and cultural lessons, interactive mathematics, language learning adventures, insightful career explorations, and collaborative projects. Simply book an appointment, and our expert VR simulation team, working hand-in-hand with your teachers, will transport your students into a world of knowledge and discovery. It's not just a service; it's an educational journey that transcends traditional boundaries. Let Verve redefine the way your students learn, one immersive experience at a time.
                            </span>
                            <a href="#explore" className="button black-btn">Explore</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video hidden">
                <div className="video-card">
                    <div className="video">
                        <video autoPlay muted loop playsInline>
                            <source src="/images/The new revolution for education.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section className="portfolio hidden" id="portfolio-loc">
                <h1>Our Services</h1>
                <div className="portfolio-cards">
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/VRlibrary.jpeg" alt="Book VR sessions" />
                        <div className="overlay">
                            <a href="#book">
                                <h3>Book VR sessions</h3>
                            </a>
                            <p>
                                With VerveIN, you can easily schedule VR simulation experience for your classroom of any subject.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/vr headset.png" alt="Providing content library" />
                        <div className="overlay">
                            <h3>Providing content library</h3>
                            <p>
                                VerveIN ensures that you do not have to worry about the content library, we provide the library ourselves to ensure hassle-free session.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img loading="lazy" src="/images/VR tools.png" alt="Setting up Tech" />
                        <div className="overlay">
                            <h3>Setting up Tech</h3>
                            <p>
                                VerveIN sends an expert team to setup the tech to make the classroom experience fast and hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flow-container hidden">
                <h2 className="flow-title">Flow of our Services:</h2>
                <div className="flow-steps">
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="step-title">Intrigued by VR Integration for Educational Purposes</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <h3 className="step-title">Form Completed for Session</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3 className="step-title">Session Arranged</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-vr-cardboard"></i>
                        </div>
                        <h3 className="step-title">VR Headset & Assortment of Content Provided</h3>
                    </div>
                </div>
            </div>

            <div className="faq-container hidden" id="FAQ">
                <h3>FAQs</h3>
                <div className="faq-header">
                    <div>
                        <h1>Frequently</h1>
                        <h2>asked questions</h2>
                    </div>
                    <div>
                        <p>Discover quick answers to common questions and get clarity on how we partner with you for your needs.</p>
                    </div>
                </div>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-question">
                            <div className="question-toggle" onClick={() => toggleFaq(index)}>
                                {faq.question}
                                <span className={`toggle-icon ${openFaqIndex === index ? 'rotate' : ''}`}>&#x25BC;</span>
                            </div>
                            <div className={`answer ${openFaqIndex === index ? 'open' : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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

            <section className="new">
                <footer className="top">
                    <img src="/images/vervein.png" alt="VerveIN" />
                    <div className="links">
                        <div>
                            <h2 style={{ fontWeight: 'bold' }}>Explore Platform</h2>
                            <a href="#about-us">About us</a>
                            <a href="#contact">Contact us</a>
                        </div>
                        <div>
                            <h2 style={{ fontWeight: 'bold' }}>Features</h2>
                            <a href="#show">Show Interest</a>
                            <a href="#book">Book Session</a>
                        </div>
                    </div>
                </footer>
                <footer className="bottom">
                    <div className="legal">
                        <span>© 2023 All rights reserved</span>
                    </div>
                    <div className="links">
                        <a href="https://www.instagram.com/verveinnovations" className="fa-brands fa-instagram" aria-label="Instagram"></a>
                        <a href="https://www.linkedin.com/company/vervein" className="fa-brands fa-linkedin" aria-label="LinkedIn"></a>
                        <a href="https://x.com/verveinnovate" className="fa-brands fa-twitter" aria-label="Twitter"></a>
                        <a href="https://www.youtube.com/@Verveinnovations" className="fa-brands fa-youtube" aria-label="YouTube"></a>
                    </div>
                </footer>
            </section>
        </div>
    );
}
