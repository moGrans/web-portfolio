import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderMe from "../component/header/HeaderMe";
import FooterMe from "../component/footer/FooterMe";
import ContactMe from "../elements/contact/ContactMe";
import PortfolioListMe from "../elements/portfolio/PortfolioListMe";

import ProgressMeLang from "../blocks/progressbar/ProgressMeLang";
import ProgressMeService from "../blocks/progressbar/ProgressMeService";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const SeperateLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);

const HomePage = () => {
    let title = 'About Me',
        description = 'I am a web developer who is passionate of creating both front-end and back-end applications, ' +
                      'and I am currently working towards a competent full-stack engineer as I continue to develop my skillset. '  +
                      'Having completed my university study, I look forward to thriving, contributing and making impact within the industry.';

    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio" />

            <HeaderMe homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */} 
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--34" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Hao Liu <br/>
                                            <TextLoop>
                                                <span> Computer Engineer. </span>
                                                <span> Software Developer. </span>
                                                <span> Passionate Coder </span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in Toronto, Canada.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-me.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                            <a className="rn-button-style--2 btn-primary-color" href="https://1drv.ms/b/s!AlbXZCEGha5ngdpJlgjfSFNmmgU4XQ?e=yQMhNI">
                                                <span>Download Resume</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area */}
            
            <div id="resume" className="rn-featured-service-area pt--90 pb--120 bg_color--5">
                <div className="container">
                    <div className="service-details-inner text-left">
                        <div className="inner">
                            {/* Education */}
                            <div className="row">
                                {/* Start of Category  */}
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30 page-title">
                                    {/* <div className="section-title"> */}
                                    <h3 className="title">Education</h3>
                                    {/* </div> */}
                                </div>
                                {/* End of Category  */}
                                
                                {/* Start of Details */}
                                <div className="col-lg-8 col-md-6 col-sm-12 col-12  sercice-details-content pb--80">
                                    <div className="details mt_md--30 mt_sm--30">
                                        <h4 className="title">University of Toronto</h4>
                                        <p className="major">
                                            Bachelors in Computer Engineering •&nbsp;<em>Sep 2015 - June 2020</em>
                                        </p>
                                        <p>
                                            Throughout the school years in computer engineering, 
                                            I have absorbed and consolidated theoretical knowledge on computer organizations, 
                                            programming paradigms, algorithms, data structures, and operating systems; 
                                            while also accumulated considerable amount of practical experience on them by synchronously 
                                            completing in-course and personal projects.
                                        </p>
                                    </div>
                                </div>
                                {/* End of Details */}
                            </div>

                            <SeperateLine color="rgba(198,201,216,0.5)" />
                            
                            <div className="row">
                                {/* Start of Category  */}
                                <div className="col-lg-4 col-md-6 col-12 mt--30 page-title">
                                    {/* <div className="section-title"> */}
                                    <h3 className="title">Work Experience</h3>
                                    {/* </div> */}
                                </div>
                                {/* End of Category  */}
                                
                                {/* Start of Details */}
                                <div className="col-lg-8 col-md-6 col-12  sercice-details-content pb--80">
                                    <div className="details mt_md--30 mt_sm--30">
                                        <h4 className="title">NVIDIA Development</h4>
                                        <p className="major">
                                            Performance Analyst •&nbsp;<em>Aug 2018 - Sep 2019</em>
                                        </p>
                                        <p>
                                            When I worked at NVIDIA, 
                                            my responsibilities mainly lay on optimizing GPU performance on the basis of applications, 
                                            as well as introducing new web services to improve the team’s workflow and software delivery pipelines. 
                                            These experience offers me a massive amount of exposures to many modern web technologies and models from 
                                            Angular, Flask, Docker to microservices, CI/CD and SaaS. 
                                            This internship at NVIDIA gives me a head start of being a good developer in modern software companies, 
                                            allowing me to adapt to my future role faster.
                                        </p>
                                    </div>
                                </div>
                                {/* End of Details */}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            {/* Start Service Area  */}
            <div id="skills" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--4" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">My skills</h2>
                                    {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                                <div className="rn-progress-area pb--120">
                                    <div className="container">
                                        <div className="row row--35">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="single-column">
                                                    <h4 className="tilte">Programming Languages</h4>
                                                    <ProgressMeLang ProgressStyle="progress-bar--1" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="single-column">
                                                    <h4 className="tilte">Frameworks & Services</h4>
                                                    <ProgressMeService ProgressStyle="progress-bar--1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 
            
            {/* Start Portfolio Area */}
            <div id="projects" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">My Latest Project</h2>
                                        {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <PortfolioListMe styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>

                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--4">
                    <ContactMe contactTitle="Get in touch." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterMe />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default HomePage;
