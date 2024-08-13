import React from "react";
import '../styles/footer.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path, hash = '') => {
        if (location.pathname === path && hash) {
            // If we're already on the correct page, just scroll to the element
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to the new page
            navigate(path + hash);
            // Scroll to top or to the element after a short delay
            setTimeout(() => {
                if (hash) {
                    const element = document.getElementById(hash.slice(1));
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo(0, 0);
                }
            }, 100);
        }
    };

    return (
        <section className="new1">
            <footer className="top">
                <img src="/images/vervein.png" alt="VerveIN" />
                <div className="links">
                    <div>
                        <h2 style={{ fontWeight: 'bold' }}>Explore Platform</h2>
                      
                        <li><Link to="/Home#about-us" onClick={() => handleNavigation('/Home', '#about-us')}>About us</Link></li>
                        <li><Link to="/Partners" onClick={() => handleNavigation('/Partners')}>Delivery Partner</Link></li>
                    </div>
                    <div>
                        <h2 style={{ fontWeight: 'bold' }}>Features</h2>
                        <li><Link to="/Book" onClick={() => handleNavigation('/Book')}>Session Plans</Link></li>
                        <li><Link to="/Content" onClick={() => handleNavigation('/Content')}>Subscription Plans</Link></li>
                    </div>
                </div>
            </footer>
            <footer className="bottom">
                <div className="legal">
                    <span>© 2023 All rights reserved</span>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/verveinnovations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                       className="fa-brands fa-instagram" 
                       aria-label="Follow us on Instagram"
                       target="_blank" 
                       rel="noopener noreferrer">
                    </a>
                    <a href="https://www.linkedin.com/company/vervein/?viewAsMember=true" 
                       className="fa-brands fa-linkedin" 
                       aria-label="Connect with us on LinkedIn"
                       target="_blank" 
                       rel="noopener noreferrer">
                    </a>
                    <a href="https://x.com/verveinnovate" 
                       className="fa-brands fa-twitter" 
                       aria-label="Follow us on Twitter"
                       target="_blank" 
                       rel="noopener noreferrer">
                    </a>
                    <a href="https://www.youtube.com/@Verveinnovations" 
                       className="fa-brands fa-youtube" 
                       aria-label="Watch our YouTube videos"
                       target="_blank" 
                       rel="noopener noreferrer">
                    </a>
                </div>
            </footer>
        </section>
    );
}