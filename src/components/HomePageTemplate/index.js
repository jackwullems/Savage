import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
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
        let controller = new ScrollMagic.Controller()

        // let timeline1 = new TimelineLite()
        // timeline1.to('.scrollRight1', { x: '50%' }, 0).to('.scrollDown1', { y: '100%' }, 0)
        // timeline1.to('.scrollDown1', { y: '100%' })
        // new ScrollMagic.Scene({
        //     triggerElement: '#section1',
        //     duration: '1000%',
        //     triggerHook: 0
        // })
        // .setTween('.scrollDown1', { y: '1000%' })
        // .addTo(controller)

        // let timeline2 = new TimelineLite()
        // timeline2.to('.scrollRight2', { x: '100%' })
        new ScrollMagic.Scene({
            triggerElement: '#section2',
            duration: '100%',
            triggerHook: 1
        })
            .setTween('.scrollRight2', { x: '100%' })
            .addTo(controller)

        // let timeline3 = new TimelineLite()
        // timeline3.to('.scroll-right3', { x: '50%' })
        new ScrollMagic.Scene({
            triggerElement: '#section3',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween('.scroll-right3', { x: '50%' })
            .addTo(controller)

        // let timeline4 = new TimelineLite()
        // timeline4.to('.scroll-right4', { x: '50%' })
        new ScrollMagic.Scene({
            triggerElement: '#section4',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween('.scroll-right4', { x: '50%' })
            .addTo(controller)

        // let timeline5 = new TimelineLite()
        // timeline5.to('.scroll-right5', { x: '50%' })
        new ScrollMagic.Scene({
            triggerElement: '#section5',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween('.scroll-right5', { x: '50%' })
            .addTo(controller)

        // let timeline6 = new TimelineLite()
        // timeline6.to('.scroll-right6', { x: '50%' })
        new ScrollMagic.Scene({
            triggerElement: '#section5',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween('.scroll-right6', { x: '50%' })
            .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        })
            .setPin('#free-consultion')
            .addTo(controller)
        // gsap.registerPlugin(MotionPathPlugin)
        // const ppp = "M26.05-29.57L26.05-29.57L26.05-29.57Q27.01-31.49 27.01-33.28L27.01-33.28L27.01-33.28Q27.01-35.07 26.82-36.06L26.82-36.06L26.82-36.06Q26.62-37.06 26.18-37.82L26.18-37.82L26.18-37.82Q25.22-39.49 23.30-39.49L23.30-39.49L23.30-39.49Q20.93-39.49 19.01-37.76L19.01-37.76L19.01-37.76Q16.96-35.97 16.96-33.15L16.96-33.15L16.96-33.15Q16.96-31.36 18.21-29.98L18.21-29.98L18.21-29.98Q19.46-28.61 21.38-27.33L21.38-27.33L21.38-27.33Q23.30-26.05 25.47-24.77L25.47-24.77L25.47-24.77Q27.65-23.49 29.57-21.95L29.57-21.95L29.57-21.95Q33.98-18.43 33.98-13.70L33.98-13.70L33.98-13.70Q33.98-10.50 32.29-7.78L32.29-7.78L32.29-7.78Q30.59-5.06 27.78-3.07L27.78-3.07L27.78-3.07Q21.63 1.28 13.50 1.28L13.50 1.28L13.50 1.28Q6.91 1.28 3.52-0.86L3.52-0.86L3.52-0.86Q0.13-3.01 0.13-6.27L0.13-6.27L0.13-6.27Q0.13-12.10 4.67-13.57L4.67-13.57L4.67-13.57Q5.95-14.02 7.90-14.02L7.90-14.02L7.90-14.02Q9.86-14.02 12.10-13.18L12.10-13.18L12.10-13.18Q11.07-10.56 11.07-8.19L11.07-8.19L11.07-8.19Q11.07-3.07 14.72-3.07L14.72-3.07L14.72-3.07Q17.09-3.07 19.04-4.80L19.04-4.80L19.04-4.80Q20.99-6.53 20.99-8.48L20.99-8.48L20.99-8.48Q20.99-10.43 19.74-11.84L19.74-11.84L19.74-11.84Q18.50-13.25 16.64-14.37L16.64-14.37L16.64-14.37Q14.78-15.49 12.64-16.58L12.64-16.58L12.64-16.58Q10.50-17.66 8.64-19.20L8.64-19.20L8.64-19.20Q4.29-22.72 4.29-28.35L4.29-28.35L4.29-28.35Q4.29-32 6.08-34.85L6.08-34.85L6.08-34.85Q7.87-37.70 10.75-39.62L10.75-39.62L10.75-39.62Q16.51-43.52 23.58-43.52L23.58-43.52L23.58-43.52Q30.66-43.52 34.08-41.41L34.08-41.41L34.08-41.41Q37.50-39.30 37.50-35.71L37.50-35.71L37.50-35.71Q37.50-32.58 35.07-30.59L35.07-30.59L35.07-30.59Q32.96-28.93 30.40-28.93L30.40-28.93L30.40-28.93Q27.84-28.93 26.05-29.57ZM66.62 1.28L66.62 1.28L66.62 1.28Q58.43 1.28 57.66-10.37L57.66-10.37L46.66-10.37L46.66-10.37Q45.38-7.42 44.48-4.86L44.48-4.86L42.82 0L33.86 0L54.02-42.24L67.78-42.24L70.46-11.14L70.46-11.14Q71.10-4.42 73.66-2.43L73.66-2.43L73.66-2.43Q71.81 1.28 66.62 1.28ZM52.16-23.17L48.64-15.04L57.47-15.04L56.70-31.49L56.70-33.22L52.16-23.17ZM78.98-39.68L78.98-39.68L78.98-39.68Q80.83-43.52 85.98-43.52L85.98-43.52L85.98-43.52Q91.14-43.52 93.54-40.54L93.54-40.54L93.54-40.54Q95.94-37.57 95.94-30.72L95.94-30.72L95.94-7.87L111.49-42.18L119.10-42.18L99.20 0L84.22 0L82.30-30.72L82.30-30.72Q82.11-34.11 81.18-36.42L81.18-36.42L81.18-36.42Q80.26-38.72 78.98-39.68ZM143.10 1.28L143.10 1.28L143.10 1.28Q134.91 1.28 134.14-10.37L134.14-10.37L123.14-10.37L123.14-10.37Q121.86-7.42 120.96-4.86L120.96-4.86L119.30 0L110.34 0L130.50-42.24L144.26-42.24L146.94-11.14L146.94-11.14Q147.58-4.42 150.14-2.43L150.14-2.43L150.14-2.43Q148.29 1.28 143.10 1.28ZM128.64-23.17L125.12-15.04L133.95-15.04L133.18-31.49L133.18-33.22L128.64-23.17ZM179.07-20.61L192.00-21.76L192.00-21.76Q187.39-11.65 187.39 0.06L187.39 0.06L187.39 0.06Q185.66 1.28 183.14 1.28L183.14 1.28L183.14 1.28Q180.61 1.28 179.01 0.10L179.01 0.10L179.01 0.10Q177.41-1.09 177.09-2.30L177.09-2.30L177.09-2.30Q175.49-0.64 172.90 0.32L172.90 0.32L172.90 0.32Q170.30 1.28 167.55 1.28L167.55 1.28L167.55 1.28Q164.80 1.28 162.40 0.38L162.40 0.38L162.40 0.38Q160.00-0.51 158.14-2.50L158.14-2.50L158.14-2.50Q154.05-6.85 154.05-15.10L154.05-15.10L154.05-15.10Q154.05-27.90 160.90-35.58L160.90-35.58L160.90-35.58Q167.94-43.52 180.42-43.52L180.42-43.52L180.42-43.52Q189.06-43.52 192.13-39.04L192.13-39.04L192.13-39.04Q193.09-37.63 193.09-35.94L193.09-35.94L193.09-35.94Q193.09-34.24 192.35-32.80L192.35-32.80L192.35-32.80Q191.62-31.36 190.46-30.21L190.46-30.21L190.46-30.21Q187.71-27.65 184.32-27.65L184.32-27.65L184.32-27.65Q182.98-27.65 181.70-28.10L181.70-28.10L181.70-28.10Q181.95-30.02 181.95-32.26L181.95-32.26L181.95-32.26Q181.95-34.50 181.79-35.52L181.79-35.52L181.79-35.52Q181.63-36.54 181.25-37.38L181.25-37.38L181.25-37.38Q180.42-39.10 178.59-39.10L178.59-39.10L178.59-39.10Q176.77-39.10 174.75-37.15L174.75-37.15L174.75-37.15Q172.74-35.20 171.14-32L171.14-32L171.14-32Q167.62-24.83 167.62-16.19L167.62-16.19L167.62-16.19Q167.62-12.22 169.15-9.41L169.15-9.41L169.15-9.41Q170.82-6.34 173.76-6.34L173.76-6.34L173.76-6.34Q174.78-6.34 175.71-6.85L175.71-6.85L175.71-6.85Q176.64-7.36 177.02-7.74L177.02-7.74L179.07-20.61ZM222.46-9.86L222.46-9.86L222.46-9.86Q223.68-8.32 223.68-5.82L223.68-5.82L223.68-5.82Q223.68-2.37 221.12-0.54L221.12-0.54L221.12-0.54Q218.56 1.28 214.53 1.28L214.53 1.28L214.53 1.28Q212.22 1.28 208.70 0.77L208.70 0.77L208.70 0.77Q201.79-0.32 199.68-0.32L199.68-0.32L199.68-0.32Q197.57-0.32 196.74-0.22L196.74-0.22L196.74-0.22Q195.90-0.13 194.56 0L194.56 0L202.43-42.24L230.02-42.24L230.02-42.24Q230.02-38.34 228.13-36.29L228.13-36.29L228.13-36.29Q226.24-34.24 222.53-34.24L222.53-34.24L222.53-34.24Q218.82-34.24 215.04-35.97L215.04-35.97L213.06-24.77L224.45-24.77L224.45-24.77Q224.45-21.38 222.78-19.49L222.78-19.49L222.78-19.49Q221.12-17.60 218.34-17.60L218.34-17.60L218.34-17.60Q215.55-17.60 213.82-18.24L213.82-18.24L213.82-18.24Q212.10-18.88 211.90-19.07L211.90-19.07L209.60-6.98L209.60-6.98Q211.14-6.78 214.02-6.78L214.02-6.78L214.02-6.78Q218.94-6.78 222.46-9.86Z"
        // MotionPathPlugin.convertToPath('#savage')
        // gsap.to('#savageLogo', {
        //     duration: 5,
        //     repeat: 5,
        //     repeatDelay: 1,
        //     yoyo: true,
        //     motionPath: ppp
        // })
    }, [])
    return (
        <div>
            <Helmet>
                <title>{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <p className='vertical-left fixed-10 left-5'>
                We are extension of your business
            </p>
            <p className='vertical-right underline fixed-10 right-5'>
                Scroll
            </p>
            <div className='section container' id='section1'>
                <div className='columns'>
                    <div className='column'>
                        <p className='font-150 margin-vertical-auto'>
                            Audacious<br />Marketing,<br /><b className='font-150-bold'>Savage<br />Results</b>
                        </p>
                    </div>
                    <div className='column flex-column align-items-center justify-center'>
                        <a className='font-32 squrebracket'>
                            Call Now
                    </a>
                    </div>
                </div>
            </div>
            <div className='section flex-column' id='section2'>
                <div className="container has-max-width-960">
                    <h1 className="title has-text-centered font-45">
                        Our Mission
          </h1>
                    <p className='has-text-centered font-22'>
                        To disrupt your market with audacious marketing strategies, and to provide savage results. We eat, breathe and live marketing, and the passion we have is contagious. Our goal is to become an extension of your team and help grow your business.
          </p>
                    <h1 className="title has-text-centered has-margin-top-100 font-45">
                        Trusted Partners
          </h1>
                    <div className='columns'>
                        <div className='column has-text-centered'>
                            <img src={partnerImg} />
                            <p>
                                TOP B2B COMPANIES<br />2020
              </p>
                        </div>
                        <div className='column has-text-centered'>
                            <img src={partnerImg} />
                            <p>
                                TOP B2B COMPANIES<br />2019
              </p>
                        </div>
                        <div className='column has-text-centered'>
                            <img src={partnerImg} />
                            <p>
                                TOP B2B COMPANIES<br />2018
              </p>
                        </div>
                    </div>
                </div>
                <a id='free-consultion' className='vertical-left-banner'>
                    I Want Free Consultion
                </a>
                <p className='valu scrollRight2'>VALU</p>
            </div>
            <div className='section flex-column' id='section3'>
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
                                <div className='tile'>
                                    <p className='font-22'>We guide businesses through complex marketing challenges and help them grow through branding, digital, and advertising strategies. Click below and schedule your free consultation.</p>
                                </div>
                            </div>
                            <div className='tile'>
                                <div className='tile'>
                                    <h1 className='font-150-bold'>DO</h1>
                                </div>
                                <div className='tile'>
                                    <a className='font-32 squrebracket'>
                                        Call Now
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
                                    <img src={advertisingImg} />
                                </div>
                            </div>
                            <div className='tile left-hightlight10 opacity-black padding-0'>
                                <div className='tile is-4 has-padding-left-5'>
                                    <h1 className='font-50'>Branding &<br /> Creative</h1>
                                </div>
                                <div className='tile is-8'>
                                    <img src={brandingCrativeImg} />
                                </div>
                            </div>
                            <div className='tile left-hightlight10 opacity-black padding-0'>
                                <div className='tile is-4 has-padding-left-5'>
                                    <h1 className='font-50'>Design &<br />Development</h1>
                                </div>
                                <div className='tile is-8'>
                                    <img src={designDevelopmentImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='valu scroll-right3'>SERVICE</p>
            </div>
            <div className='section flex-column' id='section4'>
                <div className='container'>
                    <div className='title has-text-centered'>
                        <p className='font-45'>Brands We Work With</p>
                    </div>
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
                </div>
                <div className='columns has-margin-top-100'>
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
                <p className='valu scroll-right4'>Trusted by Savage</p>
            </div>
            <section className='section flex-column' id='section5'>
                <div className="container has-max-width-960">
                    <h1 className="title has-text-centered font-45">
                        What Our Clients Say
          </h1>
                    <p className='has-text-centered quote font-22'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis mauris, id vulputate mauris. Fusce auctor ornare mauris vel eleifend. Nulla dapibus eros quis vehicula ultricies. Morbi semper dolor quam, euismod cursus ante condimentum a. In ornare euismod nisi, ac ullamcorper arcu sodales non. Fusce dictum hendrerit ante vel congue. Phasellus consequat suscipit interdum. Nullam arcu orci, interdum vel nunc et, tempus commodo purus.
          </p>
                    <p className='sign'>- John Doe - S Company</p>
                </div>
                <p className='valu scroll-right5'>Testimonials</p>
            </section>
            <section className='section flex-column' id='section6'>
                <div className='container has-text-centered'>
                    <div className='font-150-bold'>
                        WHY CHOOSE WE
        </div>
                    <p className='font-32'>
                        We are the fire and intelligence behind your digital presence.
          </p>
                </div>
                <p className='valu scroll-right6'>WE ARE COOL</p>
            </section>
            <section className='section'>
                <div className='has-text-centered'>
                    <img src={savageLogo} width='40' id='savageLogo' />
                    <div className='font-50'>
                        CHAT WITH A
              </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="563" height="268" id='savage'>
              <text id="SAVAGE" transform="translate(1 217)" fill="none" stroke="#44d62c" stroke-width="1" font-size="200" font-family="SegoeUIBlack, Segoe UI" letter-spacing="-0.25em"><tspan x="0" y="0">SAVAGE</tspan></text>
            </svg> */}
                    <div className='savage-path' id='savage'>
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
