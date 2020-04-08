import React, {useEffect, useState, useRef} from 'react'
import * as ScrollMagic from "scrollmagic"
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'

import config from '../../../config'
import savageLogo from '../../assets/img/savage.png'
import facebookLogo from '../../assets/img/facebook.png'
import instagramLogo from '../../assets/img/instagram.png'
import twitterLogo from '../../assets/img/twitter.png'

const contacts = [
    {
        email: 'info0@savageglobalent.com',
        phone: '954-000-0000'
    },
    {
        email: 'info1@savageglobalent.com',
        phone: '954-000-0001'
    },
    {
        email: 'info2@savageglobalent.com',
        phone: '954-000-0002'
    },
    {
        email: 'info3@savageglobalent.com',
        phone: '954-000-0003'
    },
    {
        email: 'info4@savageglobalent.com',
        phone: '954-000-0004'
    },
]
const Footer = () => {
    const refreshContact = ()=>{
        setContact(contact=>{
            if (contact+1 == contacts.length) {
                return 0
            }
            return contact+1
        })
    }
    useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, gsap)
        
        let controller = new ScrollMagic.Controller()
        let contactTimeline = gsap.timeline()
        contactTimeline
        .from('#footer-contact', {x: '-100%', opacity: 0, repeat: -1, repeatDelay: 2, onRepeat: refreshContact})
        .from('#scroll-right-footer', { x: '-100%', opacity: 0 })
        // .to('#footer-contact', { opacity: 0, x: '20%', repeat: -1, repeatDelay: 5, onRepeat: refreshContact})
        .from('.social-logo', { opacity: 0, y: '-100%', stagger: 0.5, duration: 0.2})
        .from('.footerArray', { opacity: 0, y: '-100%', stagger: 0.5, duration: 0.5})
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            // duration: '100%',
            triggerHook: 0.8,
            reverse: false
        })
        .setTween(contactTimeline)
        .addTo(controller)


    }, [])
    const [contact, setContact] = useState(0)
    const socialBoxRef = useRef(null)
    return (
    <footer className='footer relative' id='footer'>
      <div>
        <img src={savageLogo} width='40' className='footer-logo'/>
      </div>
      <div className='columns'>
        <div className='column has-padding-left-100' id='footer-contact'>
            <div className='has-margin-top-50 flex-column'>
                <p>Get In touch</p>
                <p className='font-40-800'>{contacts[contact].email}</p>
                <p className='font-40-800'>{contacts[contact].phone}</p>
            </div>
        </div>
        <div className='column has-text-centered has-margin-top-50'>
            <div className='flex-row align-items-center justify-center' ref={socialBoxRef}>
                <img src={facebookLogo} width='30' className='social-logo'/>
                <img src={twitterLogo} width='30' className='social-logo'/>
                <img src={instagramLogo} width='30' className='social-logo'/>
            </div>
        </div>
      </div>
      <div className='hl-50' id='scroll-right-footer'/>
      <div className='columns has-padding-left-100'>
        <div className='column footerArray'>
          <h1 className='footer-colum-header'>Address</h1>
          <p>400 SE 12th Street,  Building E<br/>Fort Lauderdale, 33316, FL</p>
        </div>
        <div className='column footerArray'>
          <h1 className='footer-colum-header'>Explore</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Our Work</p>
          <p>Blog</p>
        </div>
        <div className='column footerArray'>
            <h1 className='footer-colum-header'>Expertise</h1>
            <p>Advertising</p>
            <p>Brading & Creative</p>
            <p>Design & Development</p>
            <p>Resources & Tools</p>
        </div>
        <div className='column footerArray'>
          <h1 className='footer-colum-header'>Keep Up</h1>
          <p>Subscribe to our newsletter</p>
          <input type='email' className='has-background-black has-text-white email-submit' placeholder='Email address'/>
          <input type='submit' className='has-background-black has-text-white'/>
        </div>
      </div>
      <div className='one-line is-full'/>
      <p className='font-10 has-padding-left-100 has-padding-top-10'>© Savage Global Marketin 2020</p>
      {/* <div className='content has-text-centered'>
        <p>
          {config.copyright}
        </p>
        <p>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a> | <a href='https://github.com/v4iv/gatsby-starter-business'>Github Repository</a></p>
      </div> */}
    </footer>
  )
}

export default Footer
