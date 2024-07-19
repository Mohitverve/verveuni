import React from "react";
import '../styles/footer.css';

export default function Footer() {
    return (
        <section className="new1">
            <footer className="top">
                <img src="/images/vervein.png" alt="VerveIN" />
                <div className="links">
                    <div>
                        <h2 style={{ fontWeight: 'bold' }}>Explore Platform</h2>
                        <a href="#" onClick={(e) => e.preventDefault()}>About us</a>
                        <a href="#" onClick={(e) => e.preventDefault()}>Contact us</a>
                    </div>
                    <div>
                        <h2 style={{ fontWeight: 'bold' }}>Features</h2>
                        <a href="#" onClick={(e) => e.preventDefault()}>Show Interest</a>
                        <a href="#" onClick={(e) => e.preventDefault()}>Book Session</a>
                    </div>
                </div>
            </footer>
            <footer className="bottom">
                <div className="legal">
                    <span>© 2023 All rights reserved</span>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/verveinnovations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="fa-brands fa-instagram" aria-label="Follow us on Instagram"></a>
                    <a href="https://www.linkedin.com/company/vervein/?viewAsMember=true" className="fa-brands fa-linkedin" aria-label="Connect with us on LinkedIn"></a>
                    <a href="https://x.com/verveinnovate" className="fa-brands fa-twitter" aria-label="Follow us on Twitter"></a>
                    <a href="https://www.youtube.com/@Verveinnovations" className="fa-brands fa-youtube" aria-label="Watch our YouTube videos"></a>
                </div>
            </footer>
        </section>
    );
}
