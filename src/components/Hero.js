import React, { useState, useEffect } from 'react';

import '../styles/verve.css';
import Navbar from '../components/Navbar';
import Marquee from './Marquee';



const Hero = () => {
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
  return (
    <div>
       <section className="hero hidden">
                <div className="header">
                    <div className="container">
                        <div className="row">
                           <Marquee/>
                          <Navbar/>
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
    </div>
  )
}

export default Hero
