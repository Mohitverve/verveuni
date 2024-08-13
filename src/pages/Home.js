import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase';
import '../styles/verve.css';
import Marquee from '../components/Marquee';
import { Breadcrumb } from 'antd';

import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Flow from '../components/Flow';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Video from '../components/Video';
import Card from '../components/Card';

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();

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


    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbItems = [
        { title: <Link to="/">Home</Link> },
        ...pathSegments.map((segment, index) => {
            const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
            return {
                title: index === pathSegments.length - 1
                    ? segment.charAt(0).toUpperCase() + segment.slice(1)
                    : <Link to={url}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
            };
        })
    ];
    return (
        <div>
            <Marquee />
            <div className='bread'>
                <Breadcrumb items={breadcrumbItems} /></div>
            <Hero />
          <About/>
          <Video/>
            <Portfolio />
            <Flow />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}
