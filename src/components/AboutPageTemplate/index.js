import React, { useEffect } from 'react'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
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
	// useEffect(()=>{
	// 	ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
	// })
  	useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineLite)
		let controller = new ScrollMagic.Controller()
		let timeline1 = new TimelineLite()
		timeline1.to('.scroll-right1',  { x: '100%' })
		new ScrollMagic.Scene({
            triggerElement: '#section1',
            duration: '100%',
            triggerHook: 0
		})
		.setTween(timeline1)
		.addTo(controller)

		let timeline2 = new TimelineLite()
		timeline2.to('.scroll-right2', { x: '100%' })
		new ScrollMagic.Scene({
            triggerElement: '#section1',
            duration: '100%',
            triggerHook: 0
		})
		// .setPin('#section2')
		.setTween(timeline2)
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
  return (
    <div>
      <section className='section' id='section1'>
        <p className='font-150-bold has-text-centered has-margin-top-100'>About Us</p>
        <div className='hl-70 scroll-right1'/>
        <div className='flex-column is-full-height relative'>
          <div className='container has-max-width-960 justify-center has-text-centered has-margin-top-100'>
            <p className='font-45'>Value Offering</p>
            <p className='font-22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
          </div>
          <p className='valu scroll-right2'>Value</p>
        </div>
      </section>
      <section className='section flex-row is-padding-top-100' id='section2'>
        <p className='font-150-bold is-half-width text-right has-padding-right-50'>WHAT WE'RE GREAT AT</p>
        <div className='flex-column is-half-width justify-space-around has-padding-50 left-highlight'>
          <p className='font-22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
          <p className='font-22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.</p>
        </div>
        <p className='valu scroll-right3'>EXPERTISE</p>
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
        <TeamBox/>
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
