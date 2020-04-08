import React, { useRef, useEffect } from 'react'
import Helmet from 'react-helmet'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import 'bulma-helpers/css/bulma-helpers.min.css'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'

import { ContactForm } from '../forms'
import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'
import videoImg from '../../assets/img/video.png'
import amazonLogoImg from '../../assets/img/amazon-logo-rgb.png'
import careers1Img from '../../assets/img/careers1.png'
import resources1Img from '../../assets/img/resources1.png'
import work1Img from '../../assets/img/work1.png'
import work2Img from '../../assets/img/work2.png'
import work3Img from '../../assets/img/work3.png'
import ChatSection from '../ChatSection'
import TrustedSection from '../TrustedSection'


export default () => {
	useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

        let controller = new ScrollMagic.Controller()        

        gsap.timeline().fromTo('#savageLogo', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#navMenu', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#amazonLogoImg', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#resourceTitle', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#scroll', {y: '-200%', opacity: 0}, {y: '0%', opacity: 1, repeat: -1, repeatDelay: 1})
        .fromTo('#free-consultion', {x: '200%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#resourceDescription', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})

        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        }).setPin('#free-consultion').addTo(controller)

        const timeline1 = gsap.timeline()
        timeline1.fromTo('#resourceImg1', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#resourceContents', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        new ScrollMagic.Scene({
            triggerElement: '#resourceSection1',
            triggerHook: 0.2
        })
        .setTween(timeline1)
        .addTo(controller)
        
        const ourprocessTimeline = gsap.timeline()
        ourprocessTimeline.from('#ourprocessTitle', {y: '-100%', opacity: 0})
        .from('.ourprocessContents', {x: '200%', opacity: 0, stagger: 0.2})
        new ScrollMagic.Scene({
            triggerElement: '#ourprocessSection',
            triggerHook: 0.4
        })
        .setTween(ourprocessTimeline)
        .addTo(controller)

        const ourworkTimeline = gsap.timeline()
        ourworkTimeline.from('#ourworkTitle', {y: '-100%', opacity: 0})
        .from('#resourcesImg3', {x: '-100%', opacity: 0})
        .from('#resourcesImg4', {x: '200%', opacity: 0})
        .from('#resourcesImg5', {x: '200%', opacity: 0})
        new ScrollMagic.Scene({
            triggerElement: '#ourworkSection',
            triggerHook: 0.4
        })
        .setTween(ourworkTimeline)
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#ourworkSection',
            triggerHook: 0.4,
            duration: '80%'
        })
        .setTween('#caseStudies', {x: caseStudiesBoxRef.current.offsetWidth-caseStudiesRef.current.offsetWidth})
        .addTo(controller)
    }, [])
    const caseStudiesBoxRef = useRef(null)
    const caseStudiesRef = useRef(null)
    return (
        <div>
            <Helmet>
            </Helmet>
            <p className='vertical-right underline fixed-10 right-5' id='scroll'>
                Scroll
            </p>
            <section className='section flex-row' id='section1'>
                <img src={videoImg} className='title-image'/>
                <div className='flex-row is-full-width has-margin-top-100 align-items-center justify-space-around'>
                    <img src={amazonLogoImg} id='amazonLogoImg'/>
                    <p className='font-60-800' id='resourceTitle'>Title Goes Here</p>
                </div>
            </section>
            <section className='flex-column has-padding-100 align-items-center relative' id='resourceSection1'>
                <div className='flex-row'>
                    <img src={careers1Img} id='resourceImg1'/>
                    <div className='flex-column has-margin-left-100'>
                        <div id='resourceDescription'>
                            <p className='bottom-highlight font-45'>Title Goes Here</p>
                            <p className='font-22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
                        </div>
                        <div id='resourceContents'>
                            <p className='font-22 has-margin-top-100'>- Lorem ipsum dolor sit amet, adipiscin.</p>
                            <p className='font-22'>- Praesent et est a augue laoreet.</p>
                            <p className='font-22'>- Nulla posuere neque quis rhoncus.</p>
                            <p className='font-22'>- Vivamus laoreet purus id justo tincidunt.</p>
                            <p className='font-22'>- Mauris sed mi quis mi commodo.</p>
                            <p className='font-22'>- Maecenas vitae sapien pellentesque.</p>
                        </div>
                    </div>
                </div>
                <img src={resources1Img} id='resourcesImg2' className='margin-top-minus'/>
                <a className='highlight-button overlap'>Talk to<br/>Specialist</a>
                <a id='free-consultion' className='vertical-left-banner-0'>
                    I Want Free Consultion
                </a>
            </section>
            <section className='flex-column align-items-center has-padding-top-100' id='ourprocessSection'>
                <p className='font-150-bold' id='ourprocessTitle'>Our Process</p>
                <div className='flex-row'>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end ourprocessContents'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>1</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end ourprocessContents'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>2</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end ourprocessContents'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>3</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end ourprocessContents'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>4</p>
                    </div>
                </div>
            </section>
            <section className='flex-column align-items-center has-padding-top-100 relative' id='ourworkSection'>
                <h1 className='font-150-bold' id='ourworkTitle'>Our <b className='font-150-bold bottom-highlight'>Work</b></h1>
                <div className='flex-row container has-margin-top-50'>
                    <div className='flex-column has-margin-30 portfolio1 relative justify-flex-end'>
                        <img src={work1Img} className='background-image' id='resourcesImg3'/>
                        <p className='image-title has-margin-left-20'>Big Title</p>
                        <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                    </div>
                    <div className='flex-column width-50 has-margin-30'>
                        <div className='flex-column relative justify-flex-end portfolio2'>
                            <img src={work2Img} className='background-image' id='resourcesImg4'/>
                            <p className='image-title has-margin-left-20'>Big Title</p>
                            <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        </div>
                        <div className='flex-column relative justify-flex-end portfolio2'>
                            <img src={work3Img} className='background-image' id='resourcesImg5'/>
                            <p className='image-title has-margin-left-20'>Big Title</p>
                            <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        </div>
                    </div>
                </div>
                <div className='absolute-flex-row-start align-items-flex-start' ref={caseStudiesBoxRef}>
                    <p className='valu' id='caseStudies' ref={caseStudiesRef}>Case Studies</p>
                </div>
            </section>
            <TrustedSection/>
            <ChatSection/>
        </div>
    )
}