import React from "react";
import './styles.css';
import faith from './images/faith.jpg';

function Info(){
    return(
        <section className="secOne">
            <img src={faith} className="info--image" alt="personal-image"/>
            <div className="card--details">
                <h1>Faith Mutitu</h1>
                <p>Frontend Developer</p>
                <small>faithmutitu.website</small>
            </div>
            <div className="socials-buttons">
                <button className="email-btn"></button>
                <button className="linkedln-btn"></button>
            </div>
        </section>
    );
}

export default Info;