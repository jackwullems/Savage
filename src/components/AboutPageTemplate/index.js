import React, { useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { CSSPlugin } from "gsap/CSSPlugin"
import 'bulma-helpers/css/bulma-helpers.min.css'

import Content from '../Content'
import PropTypes from 'prop-types'
import partnerImg from '../../assets/img/partner-1.png'
import TeamBox from '../TeamBox'
import ChatSection from '../ChatSection'
import TrustedSection from '../TrustedSection'

gsap.registerPlugin(ScrollToPlugin)

const AboutPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content
    useEffect(() => {
        ScrollMagicPluginGsap(ScrollMagic, gsap)

        let controller = new ScrollMagic.Controller()

        gsap.timeline().fromTo('#savageLogo', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        .fromTo('#navMenu', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1})
        .fromTo('#headerTitle', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.5})
        .fromTo('#headerLine', {x: '-100%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.5}, 'headerLine')
        .fromTo('#weExtension', {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 2}, 'headerLine+=1')
        .fromTo('#scrollIndicator', {y: '-200%', opacity: 0}, {y: '0%', opacity: 1, repeat: -1, repeatDelay: 1}, 'headerLine+=1')
        .fromTo('#free-consultion', {x: '200%', opacity: 0}, {x: '0%', opacity: 1})
        // .from('#valueOffer', {y: '-100%', opacity: 0, duration: 1})

        new ScrollMagic.Scene({
            triggerElement: '#free-consultion',
            triggerHook: 0.5,
        }).setPin('#free-consultion').addTo(controller)

        // console.log(remainderRef.current.offsetWidth, remainderRef.current.offsetHeight)
        // console.log(valueRef.current.offsetWidth, valueRef.current.offsetHeight)
        // console.log(valueOfferRef.current.offsetWidth, valueOfferRef.current.offsetHeight)
        // var animationX = remainderRef.current.offsetWidth-valueRef.current.offsetWidth
        // var animationY = remainderRef.current.offsetHeight-valueOfferRef.current.offsetHeight
        let remainderTimeline = gsap.timeline()
        remainderTimeline.to('#value', { x: remainderRef.current.offsetWidth-valueRef.current.offsetWidth }, 0)
        remainderTimeline.to('#valueOffer', { y: remainderRef.current.offsetHeight-valueOfferRef.current.offsetHeight, opacity: 1 }, 0)
        new ScrollMagic.Scene({
            triggerElement: '#headerSection',
            duration: '60%',
            triggerHook: 0
        })
        .setTween(remainderTimeline).addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: '#section2',
            triggerHook: 1,
            reverse: false
        }).setTween(gsap.from('#vlExpertics', {y: '-50%', opacity: 0}))
        .addTo(controller)

        // animationX = experticsBoxRef.current.offsetWidth-experticsRef.current.offsetWidth
        // animationY = experticsDesBoxRef.current.offsetHeight-experticsDesRef.current.offsetHeight
        let timelineExpertics = gsap.timeline()
        timelineExpertics.from('.experticsTitle', {x: '-50%', opacity: 0}, 0)
        .to('#expertics', {x: experticsBoxRef.current.offsetWidth-experticsRef.current.offsetWidth}, 0)
        .to('#experticsDescription', {y: experticsDesBoxRef.current.offsetHeight-experticsDesRef.current.offsetHeight, opacity: 1}, 0)
        new ScrollMagic.Scene({
            triggerElement: '#section2',
            triggerHook: 0.4,
            duration: '60%'
        }).setTween(timelineExpertics).addTo(controller)

        const companyBoxHeight = companyBoxRef.current.offsetHeight
        const animationAwards = gsap.timeline()
        animationAwards.to('#awards', {x: awardsBoxRef.current.offsetWidth-awardsRef.current.offsetWidth}, 0)
        .to('#awardsTitle', {x: awardsTitleRef.current.offsetWidth-awardsBoxRef.current.offsetWidth}, 0)
        new ScrollMagic.Scene({
            triggerElement: '#section3',
            triggerHook: 0.6,
            duration: '100%'
        }).setTween(animationAwards).addTo(controller)

        const animationCompanies = gsap.timeline({repeat: -1, repeatDelay: 1})
        animationCompanies.fromTo('#companyBox1', {scrollTo: {y: 0}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox1', {scrollTo: {y: 'max'}, opacity: 1})
        animationCompanies.fromTo('#companyBox2', {scrollTo: {y: 'max'}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox2', {scrollTo: {y: 0}, opacity: 1})
        animationCompanies.fromTo('#companyBox3', {scrollTo: {y: 'max'}, opacity: 1}, {scrollTo: {y: companyBoxHeight}, opacity: 1}).to('#companyBox3', {scrollTo: {y: 0}, opacity: 1})
        new ScrollMagic.Scene({
            triggerElement: '#section3',
            triggerHook: 0.6,
        }).setTween(animationCompanies).addTo(controller)

        let teamTimeline = gsap.timeline()
        teamTimeline.to('#team', {x: teamBoxRef.current.offsetWidth-teamRef.current.offsetWidth}, 0)
        .to('#teamTitle', {x: teamTitleRef.current.offsetWidth-teamBoxRef.current.offsetWidth}, 0)

        new ScrollMagic.Scene({
            triggerElement: '#section4',
            triggerHook: 0.6,
            duration: '100%'
        }).setTween(teamTimeline).addTo(controller)

    }, [])
    const remainderRef = useRef(null)
    const valueRef = useRef(null)
    const valueOfferRef = useRef(null)
    const experticsRef = useRef(null)
    const experticsBoxRef = useRef(null)
    const experticsDesRef = useRef(null)
    const experticsDesBoxRef = useRef(null)
    const awardsRef = useRef(null)
    const awardsBoxRef = useRef(null)
    const awardsTitleRef = useRef(null)
    const companyBoxRef = useRef(null)
    const teamBoxRef = useRef(null)
    const teamRef = useRef(null)
    const teamTitleRef = useRef(null)
    return (
        <div>
            <Helmet>
            </Helmet>
            <p id='scrollIndicator'>
                Scroll
            </p>
            <section id='headerSection'>
                <div className='page-header'>
                    <p className='font-150-bold has-text-centered has-margin-top-100' id='headerTitle'>About Us</p>
                    <div className='hl-70' id='headerLine'/>
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
                <div className='absolute-flex-row-start align-items-flex-start' ref={awardsBoxRef}>
                    <p className='valu' id='awards' ref={awardsRef}>Awards</p>
                </div>
                <p className='font-150-bold align-self-flex-end' id='awardsTitle' ref={awardsTitleRef}>Just a few awards …</p>
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
            </section>
            <section className='flex-column align-items-center has-margin-top-100 has-padding-top-200 relative' id='section4'>
                <div className='absolute-flex-row-start align-items-flex-start' ref={teamBoxRef}>
                    <p className='valu' id='team' ref={teamRef}>Savage Team</p>
                </div>
                <p className='font-150-bold align-self-flex-end' id='teamTitle' ref={teamTitleRef}>Meet the TEAM</p>
                <div className='has-margin-top-100'>
                    <TeamBox/>
                </div>
            </section>
            <TrustedSection/>
            <ChatSection/>
        </div>
    )
}

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

export default AboutPageTemplate
