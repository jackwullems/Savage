import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import 'bulma-helpers/css/bulma-helpers.min.css'

import Content from '../Content'
import PropTypes from 'prop-types'
import partnerImg from '../../assets/img/partner-1.png'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import { ContactForm } from '../forms'
import TeamBox from '../TeamBox'


const AboutPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content
    useEffect(() => {
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
        let timeline = new gsap.timeline()
        timeline.from('#savageLogo', {x: '-100%', opacity: 0})
        .from('#navMenu', {y: '-100%', opacity: 0})
        .from('#aboutUsTitle', {y: '-100%', opacity: 0, duration: 0.5})
        .from('#aboutUsLine', {x: '-100%', opacity: 0, duration: 0.5}, 'aboutUsLine')
        .from('#weExtension', {y: '-100%', opacity: 0, duration: 2}, 'aboutUsLine+=1')
        .from('#scroll', {y: '-200%', opacity: 0, repeat: -1, repeatDelay: 1}, 'aboutUsLine+=1')
        .from('#free-consultion', {x: '200%', opacity: 0})
        // .from('#valueOffer', {y: '-100%', opacity: 0, duration: 1})

        let controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        }).setPin('#free-consultion').addTo(controller)

        console.log(remainderRef.current.offsetWidth, remainderRef.current.offsetHeight)
        console.log(valueRef.current.offsetWidth, valueRef.current.offsetHeight)
        console.log(valueOfferRef.current.offsetWidth, valueOfferRef.current.offsetHeight)
        var animationX = remainderRef.current.offsetWidth-valueRef.current.offsetWidth
        var animationY = remainderRef.current.offsetHeight-valueOfferRef.current.offsetHeight
        let timeline2 = new gsap.timeline()
        timeline2.to('#value', { x: animationX }, 0)
        timeline2.to('#valueOffer', { y: animationY, opacity: 1, ease: 'power4.out' }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            duration: '60%',
            triggerHook: 0
        })
        // .setPin('#section1')
        .setTween(timeline2)
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#section2',
            triggerHook: 1,
            reverse: false
        }).setTween(gsap.from('#vlExpertics', {y: '-50%', opacity: 0}))
        .addTo(controller)

        animationX = experticsBoxRef.current.offsetWidth-experticsRef.current.offsetWidth
        animationY = experticsDesBoxRef.current.offsetHeight-experticsDesRef.current.offsetHeight


        let timelineExpertics = new gsap.timeline()
        timelineExpertics.from('.experticsTitle', {x: '-50%', opacity: 0}, 0)
        .to('#expertics', {x: animationX}, 0)
        .to('#experticsDescription', {y: animationY, opacity: 1, ease: 'slow(0.7, 0.7, false)'}, 0)
        new ScrollMagic.Scene({
            triggerElement: '#section2',
            triggerHook: 0.4,
            duration: '60%'
        }).setTween(timelineExpertics)
        .addTo(controller)


        let timeline3 = new TimelineLite()
        timeline3.to('.scroll-right3', { x: '100%' })
        new ScrollMagic.Scene({
            triggerElement: '#section2',
            duration: '100%',
            triggerHook: 0.5
        })
            // .setPin('#section2')
            .setTween(timeline3)
            .addTo(controller)

        let timeline4 = new TimelineLite()
        timeline4.to('.scroll-right4', { x: '100%' })
        new ScrollMagic.Scene({
            triggerElement: '#section3',
            duration: '100%',
            triggerHook: 0.5
        })
            // .setPin('#section2')
            .setTween(timeline4)
            .addTo(controller)

        let timeline5 = new TimelineLite()
        timeline5.to('.scroll-right5', { x: '100%' })
        new ScrollMagic.Scene({
            triggerElement: '#section4',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween(timeline5)
            .addTo(controller)

        let timeline6 = new TimelineLite()
        timeline6.to('.scroll-right6', { x: '100%' })
        new ScrollMagic.Scene({
            triggerElement: '.scroll-right6',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween(timeline6)
            .addTo(controller)
    }, [])
    const remainderRef = useRef(null)
    const valueRef = useRef(null)
    const valueOfferRef = useRef(null)
    const experticsRef = useRef(null)
    const experticsBoxRef = useRef(null)
    const experticsDesRef = useRef(null)
    const experticsDesBoxRef = useRef(null)
    return (
        <div>
            <Helmet>
            </Helmet>
            <p className='vertical-right underline fixed-10 right-5' id='scroll'>
                Scroll
            </p>
            <section id='section1' className='has-page-height'>
                <div className='page-header'>
                    <p className='font-150-bold has-text-centered has-margin-top-100' id='aboutUsTitle'>About Us</p>
                    <div className='hl-70' id='aboutUsLine'/>
                </div>
                <p className='vertical-left absolute left-5 single-line has-padding-bottom-50 zindex-down' id='weExtension'>
                    We are extension of your business
                </p>
                <div className='relative page-remainder flex-column justify-flex-start align-items-center' id='page-remainder' ref={remainderRef}>
                    <div className='has-max-width-960 has-text-centered opacity-0' id='valueOffer' ref={valueOfferRef}>
                        <p className='font-45'>Value Offering</p>
                        <p className='font-22 has-margin-top-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
                    </div>
                    <div className='absolute-flex-row-start align-items-center'>
                        <p className='valu' id='value' ref={valueRef}>Value</p>
                    </div>
                    <a id='free-consultion' className='vertical-left-banner-0'>
                        I Want Free Consultion
                    </a>
                </div>
            </section>
            <section className='section flex-row has-padding-100 has-margin-top-100 has-page-height' id='section2'>
                <div className='flex-column has-text-right has-padding-right-50'>
                    <p className='font-150-bold experticsTitle'>WHAT</p>
                    <p className='font-150-bold experticsTitle'>WE'RE</p>
                    <p className='font-150-bold experticsTitle'>GERAT AT</p>
                </div>
                <div className='vl' id='vlExpertics'/>
                <div className='flex-column is-half-width justify-flex-start has-padding-left-50 has-padding-right-50' ref={experticsDesBoxRef}>
                    <p className='font-22 opacity-0' id='experticsDescription' ref={experticsDesRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.
                    <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
                </div>
                <div className='absolute-flex-row-start align-items-flex-start' ref={experticsBoxRef}>
                    <p className='valu' id='expertics' ref={experticsRef}>EXPERTISE</p>
                </div>
            </section>
            <section className='flex-column align-items-center has-padding-top-100 relative' id='section3'>
                <p className='font-150-bold'>Just a few awards …</p>
                <div className='flex-row'>
                    <div className='flex-column has-margin-30'>
                        <img src={partnerImg} />
                        <p className='has-text-centered'>
                            TOP B2B COMPANIES<br />2020
                        </p>
                    </div>
                    <div className='flex-column has-margin-30'>
                        <img src={partnerImg} />
                        <p className='has-text-centered'>
                            TOP B2B COMPANIES<br />2020
                        </p>
                    </div>
                    <div className='flex-column has-margin-30'>
                        <img src={partnerImg} />
                        <p className='has-text-centered'>
                            TOP B2B COMPANIES<br />2020
                        </p>
                    </div>
                </div>
                <p className='valu scroll-right4'>Awards</p>
            </section>
            <section className='flex-column align-items-center has-padding-top-100 relative' id='section4'>
                <p className='font-150-bold'>Meet the TEAM</p>
                <TeamBox />
                <p className='valu scroll-right5'>Savage Team</p>
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

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

export default AboutPageTemplate
