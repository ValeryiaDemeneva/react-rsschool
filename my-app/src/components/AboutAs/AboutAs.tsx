import React from "react";
import './AboutAs.css';
import { aboutUs1, aboutUs2, aboutUs3, aboutUs4, aboutUs5, aboutUs6 } from "../../data/index";
const AboutAs = (): JSX.Element => {
    return (
        <div className="about-container">
            <div className='about-title'>
                About company DREAMHOUSE</div>
            <div>
                <p className='about-text'>Poland is one of the youngest and most promising countries of the European Union, which is developing at a tremendous speed. This is a country with a high quality of life, excellent roads, excellent medical care, and a high standard of education. That is why many people want to move to live in Poland.

                    Our company `DREAMHOUSE` specializes in providing assistance at all stages of legalization and arrangement of life and business in Poland. We have a team of young professionals who have experience in helping to legalize the stay of our fellow citizens. Most of the employees have their own experience of immigration to Poland and are ready to share it with you - our clients.</p>
                <p className='matters-list-title'>
                    For a long time we have been consulting and providing services in such matters as:</p>
                <ul className='matters-list'>
                    <li >
                        obtaining citizenship;</li>
                    <li>obtaining a temporary and permanent residence permit in Poland;</li>
                    <li>obtaining a long-term resident of the EU;</li>
                    <li>registration of companies;</li>
                    <li>accounting support of LLC and PE;</li>
                    <li>obtaining all permits, as well as trademark registration;</li>
                    <li>opening an account in any bank in Poland;</li>
                    <li>rent and purchase of residential real estate;</li>
                    <li>rent and purchase of commercial real estate;</li>
                    <li>obtaining land permits.</li>
                </ul>
                <p className ="text-after-list">
                    We guarantee absolute confidentiality of data about our clients and the conduct of business of companies.

                    Step by step, together with us, you will join this wonderful country - like Poland, adapt to it, love it as much as we love it.</p>
            </div>
            <div className='advantages-container'>
                <h3 className='advantages-title'>
                    Our advantages</h3>
                <div className='advantages-image'>
                    <img src={aboutUs1}></img>
                    <img src={aboutUs2}></img>
                    <img src={aboutUs3}></img>
                    <img src={aboutUs4}></img>
                    <img src={aboutUs5}></img>
                    <img src={aboutUs6}></img>
                </div>
                <div className='advantages-text'>
                    <p>Professionalism</p>
                    <p className='legality-advantages-text'>Legality</p>
                    <p>Work experience 5 years</p>
                    <p>Over 500 clients</p>
                    <p>Availability</p>
                    <p>Individual approach</p>
                </div>
            </div>
        </div>
    )
}
export default AboutAs;