import React, { useEffect } from 'react'
import gsap, { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import 'bulma-helpers/css/bulma-helpers.min.css'

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

export default () => {
	useEffect(()=>{
        let controller = new ScrollMagic.Controller()        
        new ScrollMagic.Scene({
            triggerElement: '#scroll-right1',
            duration: '100%',
            triggerHook: 0.5
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
	})
    return (
        <div>
            <section className='section flex-row' id='section1'>
                <img src={videoImg} className='title-image'/>
                <div className='flex-row is-full-width has-margin-top-100 align-items-center justify-space-around'>
                    <img src={amazonLogoImg} width='700' height='250'/>
                    <p className='font-60'>Title Goes Here</p>
                </div>
            </section>
            <section className='flex-column has-margin-100 align-items-center'>
                <div className='flex-row'>
                    <img src={careers1Img}/>
                    <div className='flex-column has-margin-left-100'>
                        <p className='bottom-highlight font-45'>Title Goes Here</p>
                        <p className='font-22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
                        <p className='font-22 has-margin-top-100'>- Lorem ipsum dolor sit amet, adipiscin.</p>
                        <p className='font-22'>- Praesent et est a augue laoreet.</p>
                        <p className='font-22'>- Nulla posuere neque quis rhoncus.</p>
                        <p className='font-22'>- Vivamus laoreet purus id justo tincidunt.</p>
                        <p className='font-22'>- Mauris sed mi quis mi commodo.</p>
                        <p className='font-22'>- Maecenas vitae sapien pellentesque.</p>
                    </div>
                </div>
                <img src={resources1Img} width='630' className='margin-top-minus'/>
                <a className='highlight-button overlap'>Talk to<br/>Specialist</a>
                <a className='vertical-left-banner'>
                    I Want Free Consultion
                </a>
            </section>
            <section className='flex-column align-items-center has-padding-top-100' id='section3'>
                <p className='font-150-bold'>Our Process</p>
                <div className='flex-row'>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>1</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>2</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>3</p>
                    </div>
                    <div className='flex-column has-margin-30 width-20 relative justify-flex-end'>
                        <p className='bottom-highlight font-30'>AWESOME TITLE HERE</p>
                        <p className='font-22 has-margin-top-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        <p className='valu1'>4</p>
                    </div>
                </div>
            </section>
            <section className='flex-column align-items-center has-padding-top-100 relative' id='section3'>
                <h1 className='font-150-bold'>Our <b className='font-150-bold bottom-highlight'>Work</b></h1>
                <div className='flex-row container has-margin-top-50'>
                    <div className='flex-column has-margin-30 portfolio1 relative justify-flex-end'>
                        <img src={work1Img} className='background-image'/>
                        <p className='image-title has-margin-left-20'>Big Title</p>
                        <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                    </div>
                    <div className='flex-column width-50 has-margin-30'>
                        <div className='flex-column relative justify-flex-end portfolio2'>
                            <img src={work2Img} className='background-image'/>
                            <p className='image-title has-margin-left-20'>Big Title</p>
                            <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        </div>
                        <div className='flex-column relative justify-flex-end portfolio2'>
                            <img src={work3Img} className='background-image'/>
                            <p className='image-title has-margin-left-20'>Big Title</p>
                            <p className='font-22 has-margin-top-20 has-margin-left-20 has-margin-bottom-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis</p>
                        </div>
                    </div>
                </div>
                <p className='valu' id='scroll-right1'>Case Studies</p>
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
                <p className='valu' id='scroll-right2'>Trusted by</p>
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