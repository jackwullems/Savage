import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import 'bulma-helpers/css/bulma-helpers.min.css'

import careers1Img from '../../assets/img/careers1.png'
import { ContactForm } from '../forms'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import fbServiceImg from '../../assets/img/facebook-service.png'
import instagramServiceImg from '../../assets/img/instagram-service.png'
import ServiceComponent from '../ServiceComponent'
import TrustedSection from '../TrustedSection'
import ChatSection from '../ChatSection'
import settings from '../../assets/scss/settings.scss'

const services = [
    {
        title: 'Facebook',
        img: fbServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },    
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Google',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Youtube',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Raddit',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Amazon',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'LinkedIn',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
    {
        title: 'Instagram',
        img: instagramServiceImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a.'
    },
]

export default () => {
    useEffect(()=>{
        if (settings.buildAnimation == 'true') {
            ScrollMagicPluginGsap(ScrollMagic, gsap)
            
            let controller = new ScrollMagic.Controller()        

            gsap.timeline().fromTo('#savageLogo', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
            .fromTo('#navMenu', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
            .fromTo('#marketing', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
            .fromTo('#break', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
            .fromTo('#advertising', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
            .fromTo('#headerLine', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.5}, 'headerLine')
            .fromTo('#careers1Img', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
            .fromTo('#scrollIndicator', {y: '-200%', opacity: 0}, {y: '0%', opacity: 1, repeat: -1, repeatDelay: 1}, 'headerLine+=1')

            new ScrollMagic.Scene({
                triggerElement: '#free-consultion',
                triggerHook: 0.5,
            }).setPin('#free-consultion').addTo(controller)
            
            new ScrollMagic.Scene({
                triggerElement: '#salesSection',
                triggerHook: 0.6,
                duration: '100%'
            }).setTween('#sales', {x: salesBoxRef.current.offsetWidth-salesRef.current.offsetWidth}).addTo(controller)

            new ScrollMagic.Scene({
                triggerElement: '#ourServiceSection',
                triggerHook: 0.6,
                duration: '100%'
            }).setTween('#ourService', {x: salesBoxRef.current.offsetWidth-ourServiceRef.current.offsetWidth}).addTo(controller)

            const servieTimeline = gsap.timeline()
            servieTimeline.from('.serviceComponent', {y: '-100%', opacity: 0, stagger: 0.2}, 'serviceComponent')
            .from('#careerVl', {y: '-100%', opacity: 0}, 'serviceComponent+=2')
            .from('#brandingCreative', {x: '-100%', opacity: 0}, 'serviceComponent+=3')
            .from('#designDevelopment', {x: '200%', opacity: 0}, 'serviceComponent+=3')
            new ScrollMagic.Scene({
                triggerElement: '#ourServiceSection',
                triggerHook: 0.6,
                reverse: false
            }).setTween(servieTimeline).addTo(controller)
        }
    }, [])
    const salesRef = useRef(null)
    const salesBoxRef = useRef(null)
    const ourServiceRef = useRef(null)
    return (
        <div>
            <Helmet>
            </Helmet>
            <p id='scrollIndicator'>
                Scroll
            </p>
            <section className='section flex-row' id='section1'>
                <img src={careers1Img} className='careers1Img' id='careers1Img'/>
                <div className='flex-column is-full-width'>
                    <p className='page-title has-margin-top-100' id='advertising'>Advertising</p>
                    <div className='hl-70' id='headerLine'/>
                    <p className='page-title' id='break'>&nbsp;&nbsp;&nbsp;&</p>
                    <p className='page-title' id='marketing'>Marketing</p>
                </div>
            </section>
            <section className='section has-padding-top-100' id='salesSection'>
                <div className='container has-max-width-960'>
                    <p className='font-22'>When it comes to advertising, Savage Global Marketing is the ideal choice to help you capture leads, expand your reach, and meet your target audience with ads and sponsored content that will help sell your products effectively.<br/><br/>
We’re specialists in digital advertising, and we work on all major PPC platforms including Facebook and Google, as well as Amazon, Reddit, Pinterest and LinkedIn. We use the latest metrics and data analysis platforms to A/B test all of your ads, and develop advertisements that will target your ideal customers with laser focus and precision.<br/><br/>
When it comes to building effective digital ads, we leave no stone unturned. From building marketing personas to creating advertising copy, brand collateral, custom landing pages and more, we handle it all – ensuring that your business gets a pipeline of pre-qualified, interested customers who are interested in moving through the sales funnel.<br/><br/>
If you’re looking to maximize your conversion rates, get the most for your digital ad spend, and outpace the competition – both locally and around the world – Savage Global Marketing is here to help. Get in touch with us now to learn about our advertising packages, and see how we can help your business grow. </p>
                    <button className='highlight-button vertical-center'>Talk to<br/>Specialist</button>
                </div>
                <div className='absolute-flex-row-start align-items-flex-start' ref={salesBoxRef}>
                    <p className='valu' id='sales' ref={salesRef}>Sales, Sales</p>
                </div>
            </section>
            <section className='has-padding-top-200 relative' id='ourServiceSection'>
                <div className='has-margin-100 flex-row'>
                    <div className='flex-column'>
                        <ServiceComponent service={services[0]}/>
                        <ServiceComponent service={services[1]}/>
                        <ServiceComponent service={services[2]}/>
                    </div>
                    <div className='flex-column margin-10'>
                        <ServiceComponent service={services[3]}/>
                        <ServiceComponent service={services[5]}/>
                    </div>
                    <div className='flex-column'>
                        <ServiceComponent service={services[6]}/>
                        <ServiceComponent service={services[7]}/>
                        <ServiceComponent service={services[8]}/>
                    </div>
                </div>
                <div className='absolute-flex-row-start align-items-flex-start'>
                    <p className='valu' id='ourService' ref={ourServiceRef}>Our Services</p>
                </div>
                <a id='free-consultion' className='vertical-left-banner-0'>
                    I Want Free Consultion
                </a>
            </section>
            <TrustedSection/>
            <section className='flex-row has-margin-top-100 has-height-200'>
                <div className='flex-column' id='brandingCreative'>
                    <p className='has-text-centered font-60'>Branding & Creative</p>
                    <div className='has-margin-right-100'>
                        <div className='hl'/>
                    </div>
                    <p className='font-60'/>
                </div>
                <div className='vl' id='careerVl'/>
                <div className='flex-column' id='designDevelopment'>
                    <p className='has-text-centered font-60'>Design & Development</p>
                    <div className='has-margin-left-100'>
                        <div className='hl'/>
                    </div>
                    <p className='font-60'/>
                </div>
            </section>
            <ChatSection/>
        </div>
    )
}