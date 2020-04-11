import React, { useEffect, useRef } from 'react'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import 'bulma-helpers/css/bulma-helpers.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft}  from '@fortawesome/free-solid-svg-icons'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'

import { ContactForm } from '../forms'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import advertising1Img from '../../assets/img/advertising1.png'
import advertising2Img from '../../assets/img/advertising2.png'
import advertising3Img from '../../assets/img/advertising3.png'
import ChatSection from '../ChatSection'
import TrustedSection from '../TrustedSection'
import settings from '../../assets/scss/settings.scss'

export default () => {
	useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, gsap)

        gsap.timeline().fromTo('#savageLogo', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#navMenu', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#headerTitle', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.5})
        .fromTo('#headerLine', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.5}, 'headerLine')
        .fromTo('#weExtension', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 2}, 'headerLine+=1')
        .fromTo('#scrollIndicator', {y: '-200%', opacity: 0}, {y: '0%', opacity: 1, repeat: -1, repeatDelay: 1}, 'headerLine+=1')
        .fromTo('#free-consultion', {x: '200%', opacity: 0}, {x: '0%', opacity: 1})

        let controller = new ScrollMagic.Controller()

        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        }).setPin('#free-consultion').addTo(controller)

        let remainderTimeline = gsap.timeline()
        remainderTimeline.to('#whatwedo', { x: remainderRef.current.offsetWidth-whatwedoRef.current.offsetWidth }, 0)
        remainderTimeline.to('#weBelieve', { y: remainderRef.current.offsetHeight-webelieveRef.current.offsetHeight, opacity: 1 }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#headerSection',
            duration: '60%',
            triggerHook: 0
        })
        .setTween(remainderTimeline).addTo(controller)

        let experticsTimeline = gsap.timeline()
        experticsTimeline.to('#expertics', { x: remainderRef.current.offsetWidth-experticsRef.current.offsetWidth }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#experticsSection',
            duration: '100%',
            triggerHook: 0.6
        })
        .setTween(experticsTimeline).addTo(controller)
    }, [])
    const remainderRef = useRef(null)
    const whatwedoRef = useRef(null)
    const webelieveRef = useRef(null)
    const experticsRef = useRef(null)
    return (
        <div>
            <p id='scrollIndicator'>
                Scroll
            </p>
            <section id='headerSection'>
                <div className='page-header'>
                    <p className='font-150-bold has-text-centered has-margin-top-100' id='headerTitle'>Services</p>
                    <div className='hl-70' id='headerLine'/>
                </div>
                <p className='vertical-left absolute left-5 single-line has-padding-bottom-50 zindex-down' id='weExtension'>
                    Who we are
                </p>
                <div className='relative page-remainder flex-column align-items-center' id='headerRemainder' ref={remainderRef}>
                    <div className='justify-center has-text-centered opacity-0' id='weBelieve' ref={webelieveRef}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='faQuoteLeft'/>
                        <p className='services-title'>We believe the only effective way to solve a<br/>challenge is to fully understand it.</p>
                    </div>
                    <div className='absolute-flex-row-start align-items-center'>
                        <p className='valu' id='whatwedo' ref={whatwedoRef}>WHAT<br/>WE DO</p>
                    </div>
                    <a id='free-consultion' className='vertical-left-banner-0'>
                        I Want Free Consultion
                    </a>
                </div>
            </section>
            <section className='section has-margin-top-100' id='experticsSection'>
                <div className='container has-margin-top-200 flex-row'>
                    <img src={advertising1Img} className='bigImage'/>
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
                <div className='absolute-flex-row-start'>
                    <p className='valu' id='expertics' ref={experticsRef}>EXPERTISE</p>
                </div>
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
                    <img src={advertising2Img} className='bigImage'/>
                </div>
            </section>

            <section className='section has-padding-top-100'>
                <div className='container flex-row'>
                    <img src={advertising3Img} className='bigImage'/>
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
            <TrustedSection/>
            <ChatSection/>
        </div>
    )
}