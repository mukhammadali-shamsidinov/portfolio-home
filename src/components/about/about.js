import React from 'react';
import './about.css'
function About(props) {
    return (
        <section className={'about'} id={'page-about'}>
            <div className="container">
                <div className="about-title">
                    <h1>About Us</h1>
                    <p>Homeverse.io is a
                        gated community with a great location. Located downtown, you’re within walking distance
                        of Parks, and the best shopping, dining and entertainment Getting around is a
                        breeze, with easy access to freeways, buses and trolleys. . Laundry is available
                        on premises.</p>
                    <button className="primary-btn">Read More</button>
                </div>
                <div className="about-our">
                    <div className="about-box">
                        <h3>500+</h3>
                        <p>Project</p>
                        <p>Over 500 lexury villas for“Home Away From Home” experience</p>
                    </div>
                    <div className="about-box">
                        <h3>40+</h3>
                        <p>Locations</p>
                        <p>luxury villas and private holiday homes, from all across</p>
                    </div>
                    <div className="about-box">
                        <h3>24/7</h3>
                        <p>Help</p>
                        <p>24/7 Help service for all customers to guide and support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;