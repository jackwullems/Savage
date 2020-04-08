import React, { useState, useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { TweenMax, TimelineMax, TimelineLite, gsap } from 'gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import ScrollMagic from "scrollmagic"
import 'bulma-helpers/css/bulma-helpers.min.css'
//import { MotionPathPlugin } from "gsap/MotionPathPlugin.js"

import { ContactForm } from '../forms'
import partnerImg from '../../assets/img/partner-1.png'
import advertisingImg from '../../assets/img/advertising.png'
import brandingCrativeImg from '../../assets/img/branding_crative.png'
import designDevelopmentImg from '../../assets/img/design_development.png'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import savageLogo from '../../assets/img/savage.png'
import ChatSection from '../ChatSection'
import TrustedSection from '../TrustedSection'

const HomePageTemplate = ({
    title,
    heading,
    description,
    offerings,
    meta_title,
    meta_description,
    testimonials,
}) => {

    useEffect(() => {
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
        gsap.timeline().fromTo('#savageLogo', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#navMenu', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#homeTitle', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1}, 'homeTitle')
        .fromTo('#homeCall', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#weExtension', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 2}, 'homeTitle+=1')
        .fromTo('#homeScroll', {y: '-200%', opacity: 0}, {y: '0%', opacity: 1, repeat: -1, repeatDelay: 1}, 'homeTitle+=1')

        let controller = new ScrollMagic.Controller()
        let missionTimeline = gsap.timeline()
        missionTimeline.to('#value', { x: valueBoxRef.current.offsetWidth-valueRef.current.offsetWidth }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#homeSection2',
            duration: '80%',
            triggerHook: 0.6
        })
        .setTween(missionTimeline).addTo(controller)

        const companyBoxHeight = companyBoxRef.current.offsetHeight
        const animationCompanies = gsap.timeline({repeat: -1, repeatDelay: 1})
        animationCompanies.fromTo('#companyBox1', {scrollTo: {y: 0}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox1', {scrollTo: {y: 'max'}, opacity: 1})
        animationCompanies.fromTo('#companyBox2', {scrollTo: {y: 'max'}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox2', {scrollTo: {y: 0}, opacity: 1})
        animationCompanies.fromTo('#companyBox3', {scrollTo: {y: 'max'}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox3', {scrollTo: {y: 0}, opacity: 1})
        new ScrollMagic.Scene({
            triggerElement: '#homeSection2',
            triggerHook: 0.6,
        })
        .setTween(animationCompanies).addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        }).setPin('#free-consultion')
        .addTo(controller)

        let serviceTimeline = gsap.timeline()
        serviceTimeline.to('#service', { x: serviceBoxRef.current.offsetWidth-serviceRef.current.offsetWidth }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#homeSection3',
            duration: '40%',
            triggerHook: 0.6
        })
        .setTween(serviceTimeline).addTo(controller)

        let testimonialsTimeline = gsap.timeline()
        testimonialsTimeline.to('#testimonials', { x: testimonialsBoxRef.current.offsetWidth-testimonialsRef.current.offsetWidth }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#testimonialsSection',
            duration: '80%',
            triggerHook: 0.6
        })
        .setTween(testimonialsTimeline).addTo(controller)

        let wearecoolTimeline = gsap.timeline()
        wearecoolTimeline.to('#wearecool', { x: wearecoolBoxRef.current.offsetWidth-wearecoolRef.current.offsetWidth }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#wearecoolSection',
            duration: '80%',
            triggerHook: 0.6
        })
        .setTween(wearecoolTimeline).addTo(controller)
    }, [])
    const valueBoxRef = useRef(null)
    const valueRef = useRef(null)
    const companyBoxRef = useRef(null)
    const serviceBoxRef = useRef(null)
    const serviceRef = useRef(null)
    const testimonialsBoxRef = useRef(null)
    const testimonialsRef = useRef(null)
    const wearecoolBoxRef = useRef(null)
    const wearecoolRef = useRef(null)
    return (
        <div>
            <Helmet>
                <title>{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <p className='vertical-left left-5 single-line absolute has-margin-top-100' id='weExtension'>
                We are extension of your business
            </p>
            <p className='vertical-right underline fixed-10 right-5' id='homeScroll'>
                Scroll
            </p>
            <div className='section container has-margin-top-50' id='homeSection1'>
                <div className='columns'>
                    <div className='column' id='homeTitle'>
                        <p className='font-150 margin-vertical-auto'>
                            Audacious<br />Marketing,<br /><b className='font-150-bold'>Savage<br />Results</b>
                        </p>
                    </div>
                    <div className='column flex-column align-items-center justify-center' id='homeCall'>
                        <a className='font-32 squrebracket'>
                            &nbsp;&nbsp;Call Now&nbsp;&nbsp;
                    </a>
                    </div>
                </div>
            </div>
            <div className='section flex-column has-margin-top-100 has-padding-top-50 align-items-center' id='homeSection2'>
                <div className='absolute-flex-row-start align-items-flex-start' ref={valueBoxRef}>
                    <p className='valu' id='value' ref={valueRef}>Value</p>
                </div>
                <div className="has-max-width-960">
                    <h1 className="title has-text-centered font-45">
                        Our Mission
                    </h1>
                    <p className='has-text-centered font-22'>
                        To disrupt your market with audacious marketing strategies, and to provide savage results. We eat, breathe and live marketing, and the passion we have is contagious. Our goal is to become an extension of your team and help grow your business.
                    </p>
                </div>
                <h1 className="title has-text-centered has-margin-top-100 font-45">
                    Trusted Partners
                </h1>
                <div className='has-margin-top-50'>
                    <div className='flex-row'>
                        <div className='flex-column'>
                            <div className='companyBox' id='companyBox1' ref={companyBoxRef}>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                            </div>
                            <p className='has-text-centered has-margin-top-30'>
                                TOP B2B COMPANIES<br />2020
                            </p>
                        </div>
                        <div className='flex-column'>
                            <div className='companyBox' id='companyBox2'>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                            </div>
                            <p className='has-text-centered has-margin-top-30'>
                                TOP B2B COMPANIES<br />2019
                            </p>
                        </div>
                        <div className='flex-column'>
                            <div className='companyBox' id='companyBox3'>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                                <img src={partnerImg} width='150px' height='150px' className='has-margin-30'/>
                            </div>
                            <p className='has-text-centered has-margin-top-30'>
                                TOP B2B COMPANIES<br />2018
                            </p>
                        </div>
                    </div>
                </div>
                <a id='free-consultion' className='vertical-left-banner'>
                    I Want Free Consultion
                </a>
            </div>
            <div className='section flex-column has-padding-top-200' id='homeSection3'>
                <div className='absolute-flex-row-start align-items-flex-start' ref={serviceBoxRef}>
                    <p className='valu' id='service' ref={serviceRef}>SERVICE</p>
                </div>
                <div className='container is-fluid'>
                    <div className='tile is-ancestor'>
                        <div className='tile is-5 is-vertical'>
                            <div className='tile'>
                                <h1 className='font-150-bold'>WHAT</h1>
                            </div>
                            <div className='tile'>
                                <div className='tile'>
                                    <h1 className='font-150-bold'>WE</h1>
                                </div>
                                <div className='tile has-padding-right-50'>
                                    <p className='font-22'>We guide businesses through complex marketing challenges and help them grow through branding, digital, and advertising strategies. Click below and schedule your free consultation.</p>
                                </div>
                            </div>
                            <div className='tile'>
                                <div className='tile'>
                                    <h1 className='font-150-bold'>DO</h1>
                                </div>
                                <div className='tile'>
                                    <a className='font-32 squrebracket'>
                                        &nbsp;&nbsp;Call Now&nbsp;&nbsp;
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='tile is-7 is-vertical'>
                            <div className='tile left-hightlight10 opacity-black padding-0'>
                                <div className='tile is-4 has-padding-left-5'>
                                    <h1 className='font-50 zindex-up'>Advertising</h1>
                                </div>
                                <div className='tile is-8'>
                                    <img src={advertisingImg} width='670px' height='130px'/>
                                </div>
                            </div>
                            <div className='tile left-hightlight10 opacity-black padding-0'>
                                <div className='tile is-4 has-padding-left-5'>
                                    <h1 className='font-50'>Branding &<br /> Creative</h1>
                                </div>
                                <div className='tile is-8'>
                                    <img src={brandingCrativeImg} width='670px' height='130px'/>
                                </div>
                            </div>
                            <div className='tile left-hightlight10 opacity-black padding-0'>
                                <div className='tile is-4 has-padding-left-5'>
                                    <h1 className='font-50'>Design &<br />Development</h1>
                                </div>
                                <div className='tile is-8'>
                                    <img src={designDevelopmentImg} width='670px' height='130px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TrustedSection/>
            <div className='section columns has-margin-top-100' id='section4'>
                <div className='column is-2 border-right'>
                    <h1 className='vertical-result font-150-bold'>
                        Results
                    </h1>
                </div>
                <div className='column is-4 flex-column justify-center'>
                    <div className='font-45'>Pines Ford</div>
                    <p className='font-22'>- Lorem ipsum dolor sit amet, adipiscin.</p>
                    <p className='font-22'>- Praesent et est a augue laoreet.</p>
                    <p className='font-22'>- Nulla posuere neque quis rhoncus.</p>
                    <p className='font-22'>- Vivamus laoreet purus id justo tincidunt.</p>
                    <p className='font-22'>- Mauris sed mi quis mi commodo.</p>
                    <p className='font-22'>- Maecenas vitae sapien pellentesque.</p>
                </div>
                <div className='column is-6'>
                    <h1 className='font-300'>200<strong className='highlight'>%</strong></h1>
                    <div className='font-45'>Organic Traffic</div>
                    <h1 className='font-300'>10<strong className='highlight'>K</strong></h1>
                    <div className='font-45'>Visitors per day</div>
                </div>
            </div>
            <section className='section flex-column has-margin-top-100' id='testimonialsSection'>
                <div className='absolute-flex-row-start align-items-flex-start' ref={testimonialsBoxRef}>
                    <p className='valu' id='testimonials' ref={testimonialsRef}>Testimonials</p>
                </div>
                <div className="container has-max-width-960">
                    <h1 className="title has-text-centered font-45">
                        What Our Clients Say
                    </h1>
                    <p className='has-text-centered quote font-22'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.
                    </p>
                    <p className='sign'>- John Doe - S Company</p>
                </div>
            </section>
            <section className='section flex-column has-padding-top-100' id='wearecoolSection'>
                <div className='absolute-flex-row-start align-items-flex-start' ref={wearecoolBoxRef}>
                    <p className='valu' id='wearecool' ref={wearecoolRef}>WE ARE<br/>COOL</p>
                </div>
                <div className='container has-text-centered'>
                    <div className='font-150-bold'>
                        WHY CHOOSE WE
                    </div>
                    <p className='font-32'>
                        We are the fire and intelligence behind your digital presence.
                    </p>
                </div>
            </section>
            <ChatSection/>
        </div>
    )
}

HomePageTemplate.propTypes = {
    title: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    offerings: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    testimonials: PropTypes.array,

}

export default HomePageTemplate
