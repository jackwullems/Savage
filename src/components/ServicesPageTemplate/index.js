import React, { useEffect } from 'react'
import gsap, { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import 'bulma-helpers/css/bulma-helpers.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft}  from '@fortawesome/free-solid-svg-icons'

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
import { ContactForm } from '../forms'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import advertising1Img from '../../assets/img/advertising1.png'
import advertising2Img from '../../assets/img/advertising2.png'
import advertising3Img from '../../assets/img/advertising3.png'

export default () => {
    return (
        <div>
            <section id='section1'>
                <p className='font-150-bold has-text-centered has-margin-top-100'>Services</p>
                <div className='hl-70'/>
                <div className='flex-column is-full-height relative'>
                    <div className='justify-center has-text-centered has-margin-top-100'>
                        <FontAwesomeIcon icon={faQuoteLeft} className='faQuoteLeft'/>
                        <p className='services-title'>We believe the only effective way to solve a<br/>challenge is to fully understand it.</p>
                    </div>
                    <p className='valu scroll-right2 single-line'>WHAT WE DO</p>
                    <p className='vertical-left-banner'>
                        I Want Free Consultion
                    </p>
                </div>
            </section>
            <section className='section has-padding-top-100'>
                <div className='container has-margin-top-200 flex-row'>
                    <img src={advertising1Img} width='500'/>
                    <div className='flex-column'>
                    <p className='advertising'>Advertising</p>
                    <p className='black-box'>When it comes to advertising, Savage Global Marketing is the ideal choice to help you capture leads, expand your reach, and meet your target audience with ads and sponsored content that will help sell your products effectively.<br/><br/>
We’re specialists in digital advertising, and we work on all major PPC platforms including Facebook and Google, as well as Amazon, Reddit, Pinterest and LinkedIn. We use the latest metrics and data analysis platforms to A/B test all of your ads, and develop advertisements that will target your ideal customers with laser focus and precision.<br/><br/>
When it comes to building effective digital ads, we leave no stone unturned. From building marketing personas to creating advertising copy, brand collateral, custom landing pages and more, we handle it all – ensuring that your business gets a pipeline of pre-qualified, interested customers who are interested in moving through the sales funnel.<br/><br/>
If you’re looking to maximize your conversion rates, get the most for your digital ad spend, and outpace the competition – both locally and around the world – Savage Global Marketing is here to help. Get in touch with us now to learn about our advertising packages, and see how we can help your business grow. </p>
                    </div>
                    <div className='flex-column'>
                        <div className='flex-column left-highlight justify-center fit-height has-padding-left-20'>
                            <p className='font-32'>Facebook</p>
                            <p className='font-32'>Instagram</p>
                            <p className='font-32'>Google</p>
                            <p className='font-32'>Youtube</p>
                            <p className='font-32'>Amazon</p>
                            <p className='font-32'>Raddit</p>
                            <p className='font-32'>Pinterest</p>
                            <p className='font-32'>LinkedIn</p>
                        </div>
                        <a className='font-32 has-margin-top-50 squrebracket single-line'>Read More</a>
                    </div>
                </div>
                <p className='valu scroll-right2'>EXPERTISE</p>
            </section>
            <section className='section has-padding-top-100'>
                <div className='container flex-row'>
                    <div className='flex-column'>
                        <div className='flex-column right-highlight justify-center fit-height has-padding-right-20 has-text-right single-line has-margin-top-100'>
                            <p className='font-32'>Content Packages</p>
                            <p className='font-32'>Creative Packages</p>
                            <p className='font-32'>Video Packages</p>
                            <p className='font-32'>Photo Packages</p>
                            <p className='font-32'>Video Packages</p>
                            <p className='font-32'>Product Packages</p>
                            <p className='font-32'>Video Packages</p>
                            <p className='font-32'>Visual Packages</p>
                            <p className='font-32'>Logo Packages</p>
                            <p className='font-32'>Email Packages</p>
                        </div>
                        <a className='font-32 has-margin-top-50 squrebracket has-text-right single-line'>Read More</a>
                    </div>
                    <div className='flex-column'>
                        <p className='advertising'>Branding<br/>&<br/>Creative</p>
                        <p className='black-box1'>When it comes to advertising, Savage Global Marketing is the ideal choice to help you capture leads, expand your reach, and meet your target audience with ads and sponsored content that will help sell your products effectively.<br/><br/>
We’re specialists in digital advertising, and we work on all major PPC platforms including Facebook and Google, as well as Amazon, Reddit, Pinterest and LinkedIn. We use the latest metrics and data analysis platforms to A/B test all of your ads, and develop advertisements that will target your ideal customers with laser focus and precision.<br/><br/>
When it comes to building effective digital ads, we leave no stone unturned. From building marketing personas to creating advertising copy, brand collateral, custom landing pages and more, we handle it all – ensuring that your business gets a pipeline of pre-qualified, interested customers who are interested in moving through the sales funnel.<br/><br/>
If you’re looking to maximize your conversion rates, get the most for your digital ad spend, and outpace the competition – both locally and around the world – Savage Global Marketing is here to help. Get in touch with us now to learn about our advertising packages, and see how we can help your business grow. </p>
                    </div>
                    <img src={advertising2Img} width='500'/>
                </div>
            </section>

            <section className='section has-padding-top-100'>
                <div className='container flex-row'>
                    <img src={advertising3Img} width='500'/>
                    <div className='flex-column'>
                    <p className='advertising'>Design<br/>&<br/>Development</p>
                    <p className='black-box'>When it comes to advertising, Savage Global Marketing is the ideal choice to help you capture leads, expand your reach, and meet your target audience with ads and sponsored content that will help sell your products effectively.<br/><br/>
We’re specialists in digital advertising, and we work on all major PPC platforms including Facebook and Google, as well as Amazon, Reddit, Pinterest and LinkedIn. We use the latest metrics and data analysis platforms to A/B test all of your ads, and develop advertisements that will target your ideal customers with laser focus and precision.<br/><br/>
When it comes to building effective digital ads, we leave no stone unturned. From building marketing personas to creating advertising copy, brand collateral, custom landing pages and more, we handle it all – ensuring that your business gets a pipeline of pre-qualified, interested customers who are interested in moving through the sales funnel.<br/><br/>
If you’re looking to maximize your conversion rates, get the most for your digital ad spend, and outpace the competition – both locally and around the world – Savage Global Marketing is here to help. Get in touch with us now to learn about our advertising packages, and see how we can help your business grow. </p>
                    </div>
                    <div className='flex-column'>
                        <div className='flex-column left-highlight justify-center fit-height has-padding-left-20 single-line has-margin-top-200'>
                            <p className='font-32'>Web Development</p>
                            <p className='font-32'>Software Development</p>
                            <p className='font-32'>Mobile Development</p>
                            <p className='font-32'>UI/UX Design</p>
                        </div>
                        <a className='font-32 has-margin-top-50 squrebracket single-line'>Read More</a>
                    </div>
                </div>
            </section>

            <section className='flex-column align-items-center has-padding-top-200 relative' id='section5'>
                <div className='columns'>
                <div className='column'>
                    <img src={paypalImg} />
                </div>
                <div className='column'>
                    <img src={amazonImg} />
                </div>
                <div className='column'>
                    <img src={paypalImg} />
                </div>
                <div className='column'>
                    <img src={amazonImg} />
                </div>
                <div className='column'>
                    <img src={paypalImg} />
                </div>
                <div className='column'>
                    <img src={amazonImg} />
                </div>
                <div className='column'>
                    <img src={paypalImg} />
                </div>
                <div className='column'>
                    <img src={amazonImg} />
                </div>
                </div>
                <p className='valu scroll-right6'>Trusted by</p>
            </section>
            <section className='section'>
                <div className='has-text-centered'>
                <div className='font-50'>
                    CHAT WITH A
                    </div>
                <div className='savage-path'>
                    SAVAGE
                </div>
                <div className='container has-max-width-480'>
                    <ContactForm />
                </div>
                <a className='font-32 squrebracket' style={{ margin: 10 }}>
                    Submit
                </a>
                <p className='contact-left-banner'>
                    !
                    </p>
                </div>
            </section>
        </div>
    )
}