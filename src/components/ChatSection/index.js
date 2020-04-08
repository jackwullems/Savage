import React, { useEffect, useRef, useState } from 'react'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import 'bulma-helpers/css/bulma-helpers.min.css'
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.min.js"

import { ContactForm } from '../forms'

gsap.registerPlugin(MotionPathPlugin)
// gsap.registerPlugin(DrawSVGPlugin)

export default () => {
    useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, gsap)
        
        let controller = new ScrollMagic.Controller()
        let chatTimeline = gsap.timeline()
        chatTimeline.from('#chat', {y: '-200%', opacity: 0})
        .to('#savage1', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .to('#savage2', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .to('#savage3', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .to('#savage4', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .to('#savage5', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .to('#savage6', {strokeDashoffset: 0, strokeDasharray: 0, duration: 0.1})
        .from('.contactForm', {y: '-200%', stagger: 0.2, opacity: 0})
        new ScrollMagic.Scene({
            triggerElement: '#sectionChat',
            triggerHook: 0.6,
            reverse: false
        }).setTween(chatTimeline).addTo(controller)
    })
    return (
        <section className='section has-margin-top-100' id='sectionChat'>
            <div className='has-text-centered'>
                <div className='font-50' id='chat'>
                    CHAT WITH A
                </div>
                <svg  width="500px" height="200px" viewBox="0 0 212 51" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                    <g transform="matrix(1,0,0,1,-99.244,-319.12)">
                        <g transform="matrix(1,0,0,1,26.7363,16.0497)">
                            <path id='savage1' d="M93.606,353.006C108.261,353.006 115.622,345.712 115.622,337.067C115.622,319.643 89.486,324.371 89.486,318.698C89.486,317.077 90.972,315.726 95.632,315.726C99.752,315.726 104.141,316.874 108.801,319.238L113.596,307.69C108.666,304.921 102.115,303.57 95.767,303.57C81.112,303.57 73.751,310.729 73.751,319.508C73.751,337.135 99.887,332.34 99.887,338.283C99.887,339.904 98.266,340.849 93.741,340.849C88.541,340.849 82.598,339.161 78.14,336.527L73.008,348.143C77.735,351.047 85.704,353.006 93.606,353.006Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                            <path id='savage2' d="M138.854,351.925L155.333,351.925L134.667,304.651L118.999,304.651L98.333,351.925L114.542,351.925L117.716,343.686L135.68,343.686L138.854,351.925ZM122.106,332.205L126.698,320.319L131.29,332.205L122.106,332.205Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                            <path id='savage3' d="M173.162,304.651L161.614,332.272L150.335,304.651L133.181,304.651L153.172,351.925L168.84,351.925L188.83,304.651L173.162,304.651Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                            <path id='savage4' d="M207.2,351.925L223.678,351.925L203.012,304.651L187.344,304.651L166.679,351.925L182.887,351.925L186.061,343.686L204.025,343.686L207.2,351.925ZM190.451,332.205L195.043,320.319L199.636,332.205L190.451,332.205Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                            <path id='savage5' d="M239.954,338.958C237.996,339.769 236.105,340.106 234.146,340.106C227.325,340.106 222.868,335.379 222.868,328.288C222.868,320.994 227.325,316.469 234.349,316.469C238.536,316.469 241.98,318.225 244.952,321.669L255.149,312.687C250.354,306.812 242.858,303.57 233.538,303.57C217.938,303.57 206.794,313.768 206.794,328.288C206.794,342.808 217.938,353.006 233.201,353.006C240.157,353.006 248.058,350.912 253.799,346.995L253.799,327.005L239.954,327.005L239.954,338.958Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                            <path id='savage6' d="M259.404,339.904L259.404,333.691L279.394,333.691L279.394,322.21L259.404,322.21L259.404,316.672L282.163,316.672L282.163,304.651L243.736,304.651L243.736,351.925L283.041,351.925L283.041,339.904L259.404,339.904Z" style={{fill: 'none', fillRule: 'nonzero', stroke: '#44d62c', strokeWidth: 1, strokeDasharray: 1000, strokeDashoffset: 1000}}/>
                        </g>
                    </g>
                    {/* <g id='dot'>
                    <circle cx="100" cy="100" r='2' fill='#44d62c'/>
                    </g> */}
                </svg>
                {/* <div className='savage-path' id='savage'>
                    SAVAGE
                </div> */}
                <div className='container has-max-width-480'>
                    <ContactForm />
                </div>
                {/* <p className='contact-left-banner'>
                    !
                </p> */}
            </div>
        </section>

    )
}