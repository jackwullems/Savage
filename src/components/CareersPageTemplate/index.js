import React, { useEffect } from 'react'
import gsap, { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import 'bulma-helpers/css/bulma-helpers.min.css'

import careers1Img from '../../assets/img/careers1.png'
import { ContactForm } from '../forms'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import fbServiceImg from '../../assets/img/facebook-service.png'
import instagramServiceImg from '../../assets/img/instagram-service.png'
import ServiceComponent from '../ServiceComponent'

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
        let controller = new ScrollMagic.Controller()        
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            duration: '100%',
            triggerHook: 0
        })
        .setTween(gsap.to('#scroll-right1', 1, {x: '100%'}))
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#scroll-right2',
            duration: '100%',
            triggerHook: 0.5
        })
        .setTween(gsap.to('#scroll-right2', 1, {x: '100%'}))
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#scroll-right3',
            duration: '100%',
            triggerHook: 0.5
        })
        .setTween(gsap.to('#scroll-right3', 1, {x: '100%'}))
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#scroll-right4',
            duration: '100%',
            triggerHook: 0.5
        })
        .setTween(gsap.to('#scroll-right4', 1, {x: '100%'}))
        .addTo(controller)
    })
    return (
        <div>
            <section className='section flex-row' id='section1'>
                <img src={careers1Img} className='careers1Img'/>
                <div className='flex-column is-full-width'>
                    <p className='page-title has-margin-top-100'>Advertising</p>
                    <div className='hl-70' id='scroll-right1'/>
                    <p className='page-title'>&nbsp;&nbsp;&nbsp;&<br/>Marketing</p>
                </div>
            </section>
            <section className='section has-padding-top-100'>
                <div className='container has-max-width-960'>
                    <p className='font-22'>When it comes to advertising, Savage Global Marketing is the ideal choice to help you capture leads, expand your reach, and meet your target audience with ads and sponsored content that will help sell your products effectively.<br/><br/>
We’re specialists in digital advertising, and we work on all major PPC platforms including Facebook and Google, as well as Amazon, Reddit, Pinterest and LinkedIn. We use the latest metrics and data analysis platforms to A/B test all of your ads, and develop advertisements that will target your ideal customers with laser focus and precision.<br/><br/>
When it comes to building effective digital ads, we leave no stone unturned. From building marketing personas to creating advertising copy, brand collateral, custom landing pages and more, we handle it all – ensuring that your business gets a pipeline of pre-qualified, interested customers who are interested in moving through the sales funnel.<br/><br/>
If you’re looking to maximize your conversion rates, get the most for your digital ad spend, and outpace the competition – both locally and around the world – Savage Global Marketing is here to help. Get in touch with us now to learn about our advertising packages, and see how we can help your business grow. </p>
                    <button className='highlight-button vertical-center'>Talk to<br/>Specialist</button>
                </div>
                <p className='valu' id='scroll-right2'>Sales, Sales</p>
            </section>
            <section className='section has-padding-top-200'>
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
                <p className='valu' id='scroll-right3'>Our Services</p>
                <p className='vertical-left-banner1'>
                I Want Free Consultion
                </p>
            </section>
            <section>
                
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
                <p className='valu' id='scroll-right4'>Trusted by</p>
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