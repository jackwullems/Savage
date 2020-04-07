import React, { useEffect, useRef, useState } from 'react'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import 'bulma-helpers/css/bulma-helpers.min.css'

import paypalImg from '../../assets/img/paypal.png'
import amazonImg from '../../assets/img/amazon.png'

export default () => {
    useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
        let controller = new ScrollMagic.Controller()
        let trustedTimeline = gsap.timeline()
        trustedTimeline.to('#trusted', {x: trustedBoxRef.current.offsetWidth-trustedRef.current.offsetWidth}, 0)
        new ScrollMagic.Scene({
            triggerElement: '#sectionTrusted',
            triggerHook: 0.6,
            duration: '100%'
        }).setTween(trustedTimeline).addTo(controller)
        new ScrollMagic.Scene({
            triggerElement: '#sectionTrusted',
            triggerHook: 0.6,
            reverse: false
        }).setTween(gsap.from('.trustedColumn', {y: '-300%', stagger: 0.2, duration: 0.5, opacity: 0})).addTo(controller)
    }, [])
    const trustedBoxRef = useRef(null)
    const trustedRef = useRef(null)
    return (
        <section className='flex-column align-items-center has-padding-top-200  has-margin-top-100 relative' id='sectionTrusted'>
            <div className='absolute-flex-row-start align-items-flex-start' ref={trustedBoxRef}>
                <p className='valu' id='trusted' ref={trustedRef}>Trusted by</p>
            </div>
            <div className='columns'>
                <div className='column trustedColumn'>
                    <img src={paypalImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={amazonImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={paypalImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={amazonImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={paypalImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={amazonImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={paypalImg} />
                </div>
                <div className='column trustedColumn'>
                    <img src={amazonImg} />
                </div>
            </div>
        </section>

    )
}