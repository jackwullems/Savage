import React, {useEffect, useState} from 'react'
import * as ScrollMagic from "scrollmagic"
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'

import config from '../../../config'
import savageLogo from '../../assets/img/savage.png'
import facebookLogo from '../../assets/img/facebook.png'
import instagramLogo from '../../assets/img/instagram.png'
import twitterLogo from '../../assets/img/twitter.png'

const Footer = () => {
    useEffect(()=>{
        let controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            triggerElement: '#scroll-right-footer',
            duration: '100%',
            triggerHook: 1
        })
        .setTween(gsap.to('#scroll-right-footer', { x: '100%' }))
        .addTo(controller)

        let columnsTimeline = new TimelineLite()
        columnsTimeline.to('#footer-columns', { opacity: 0, x: '20%'})
        columnsTimeline.to('#footer-columns', { x: '20%',  opacity: 1})
        new ScrollMagic.Scene({
            triggerElement: '#footer-columns',
            duration: '100%',
            triggerHook: 1
        })
        .setTween(columnsTimeline)
        .addTo(controller)

        let socialLogoTimeline = new TimelineLite()
        socialLogoTimeline.to('#social-logo1', { opacity: 0, y: '-50%', ease: "back.out(1.7)"})
        socialLogoTimeline.to('#social-logo2', { opacity: 0, y: '-50%', ease: "back.out(1.7)"})
        socialLogoTimeline.to('#social-logo3', { opacity: 0, y: '-50%', ease: "back.out(1.7)"})
        socialLogoTimeline.to('#social-logo1', { opacity: 1, y: '-100%', ease: "back.out(1.7)"})
        socialLogoTimeline.to('#social-logo2', { opacity: 1, y: '-100%', ease: "back.out(1.7)"})
        socialLogoTimeline.to('#social-logo3', { opacity: 1, y: '-100%', ease: "back.out(1.7)"})
        // socialLogoTimeline.to('#social-logo1', { opacity: 0, y: '-150%'})
        // socialLogoTimeline.to('#social-logo2', { opacity: 0, y: '-150%'})
        // socialLogoTimeline.to('#social-logo3', { opacity: 0, y: '-150%'})
        // socialLogoTimeline.to('#social-logo1', { opacity: 1, y: '-200%'})
        // socialLogoTimeline.to('#social-logo2', { opacity: 1, y: '-200%'})
        // socialLogoTimeline.to('#social-logo3', { opacity: 1, y: '-200%'})
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            duration: '100%',
            triggerHook: 1
        })
        .setTween(socialLogoTimeline)
        .addTo(controller)

        let contactTimeline = new TimelineLite()
        contactTimeline.to('#footer-contact', 1, { opacity: 0, onComplete: ()=>{
            setContact(contact=>{
                if (contact.index == 0) {
                    return {
                        index: 1,
                        email: 'admin@savageglobalent.com',
                        phone: '954-000-0001'
                    }
                } else {
                    return {
                        index: 0,
                        email: 'info@savageglobalent.com',
                        phone: '954-000-0000'
                    }
                }
            })
        }})
        contactTimeline.to('#footer-contact', { opacity: 1})
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            duration: '100%',
            triggerHook: 1
        })
        .setTween(contactTimeline)
        .addTo(controller)

    }, [])
    const [contact, setContact] = useState({
        index: 0,
        email: 'info@savageglobalent.com',
        phone: '954-000-0000'
    })
    return (
    <footer className='footer relative' id='footer'>
      <div>
        <img src={savageLogo} width='40' className='footer-logo'/>
      </div>
      <div className='columns'>
        <div className='column has-padding-left-100' id='footer-contact'>
            <div className='has-margin-top-50 flex-column'>
                <p>Get In touch</p>
                <p className='font-40'>{contact.email}</p>
                <p className='font-40'>{contact.phone}</p>
            </div>
        </div>
        <div className='column has-text-centered has-margin-top-50'>
            <div className='flex-row' id='social-logo'>
                <div className='flex-column' id='social-logo1'>
                    <img src={facebookLogo} width='30' className='social-logo'/>
                    <img src={twitterLogo} width='30' className='social-logo'/>
                    <img src={instagramLogo} width='30' className='social-logo'/>
                </div>
                <div className='flex-column' id='social-logo2'>
                    <img src={twitterLogo} width='30' className='social-logo'/>
                    <img src={instagramLogo} width='30' className='social-logo'/>
                    <img src={facebookLogo} width='30' className='social-logo'/>
                </div>
                <div className='flex-column' id='social-logo3'>
                    <img src={instagramLogo} width='30' className='social-logo'/>
                    <img src={facebookLogo} width='30' className='social-logo'/>
                    <img src={twitterLogo} width='30' className='social-logo'/>
                </div>
            </div>
        </div>
      </div>
      <div className='hl-50' id='scroll-right-footer'/>
      <div className='columns' id='footer-columns'>
        <div className='column'>
            <h1 className='footer-colum-header'>Keep Up</h1>
            <p>Subscribe to our newsletter</p>
            <input type='email' className='has-background-black has-text-white email-submit' placeholder='Email address'/>
            <input type='submit' className='has-background-black has-text-white'/>
        </div>
        <div className='column'>
          <h1 className='footer-colum-header'>Address</h1>
          <p>400 SE 12th Street,  Building E<br/>Fort Lauderdale, 33316, FL</p>
        </div>
        <div className='column'>
          <h1 className='footer-colum-header'>Explore</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Our Work</p>
          <p>Blog</p>
        </div>
        <div className='column'>
            <h1 className='footer-colum-header'>Expertise</h1>
            <p>Advertising</p>
            <p>Brading & Creative</p>
            <p>Design & Development</p>
            <p>Resources & Tools</p>
        </div>
        <div className='column'>
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
