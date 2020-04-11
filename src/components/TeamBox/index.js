import React, {useEffect, useState} from 'react'
import gsap, { TweenMax, TimelineMax, TimelineLite } from 'gsap'
import * as ScrollMagic from "scrollmagic"
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'
import 'bulma-helpers/css/bulma-helpers.min.css'

import TeamProfile from './TeamProfile'
import lionImg from '../../assets/img/profile-lion.png'
import settings from '../../assets/scss/settings.scss'

const profile1 = {
    img: lionImg,
    name: 'Name',
    surName: 'Surname',
    description: 'CO-FOUNDER & CTO',
    title: 'The\nSAVAGES',
    subTitle: 'LOREM IPSUM DOLOR AMET',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.'
}

export default () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        allTeam()
    }, [])
    useEffect(()=>{
        if (settings.buildAnimation == 'true') {
            ScrollMagicPluginGsap(ScrollMagic, gsap)

            let controller = new ScrollMagic.Controller()
            
            // CSSPlugin.defaultTransformPerspective = 1000
            const profileTimeline = gsap.timeline({repeatDelay: 10, repeat: -1})
            profileTimeline.to('.profileFront', { rotationY: 180, duration: 1, stagger: 1}, 'frontHidden')
            .fromTo('.profileBack', { rotationY: -180}, { rotationY: 0, duration: 1, stagger: 1}, 'frontHidden+=0')
            .to('.profileBack', { rotationY: -180, duration: 1, stagger: 1}, 'frontHidden+=3')
            .to('.profileFront', { rotationY: 0, duration: 1, stagger: 1}, 'frontHidden+=3')
            // .to(element, {z:50}, 0)
            // .to(element, {z:0}, .5)
            new ScrollMagic.Scene({
                triggerElement: '#section4',
                triggerHook: 0.6,
                reverse: false
            }).setTween(profileTimeline).addTo(controller)
        }
    }, [teams])
    const allTeam = () => {
        const teams = []
        for (var i=0;i<100;i++) {
            teams.push(profile1)
        }
        setTeams(teams)
    }
    const team01 = []
    const team02 = []
    const team03 = []
    const team04 = []
    const team05 = []
    const team06 = []
    const team07 = []
    const team08 = []
    const team09 = []
    const team10 = []
    const team11 = []
    const team12 = []
    if (teams.length == 0) {
        return <div/>
    }
    for (var i=0;i<teams.length;i++) {
        if ((i%12)==0) {
            team01.push(teams[i])
            continue
        }
        if ((i%12)==1) {
            team02.push(teams[i])
            continue
        }
        if (i%12==2) {
            team03.push(teams[i])
            continue
        }
        if (i%12==3) {
            team04.push(teams[i])
            continue
        }
        if (i%12==4) {
            team05.push(teams[i])
            continue
        }
        if (i%12==5) {
            team06.push(teams[i])
            continue
        }
        if (i%12==6) {
            team07.push(teams[i])
            continue
        }
        if (i%12==7) {
            team08.push(teams[i])
            continue
        }
        if (i%12==8) {
            team09.push(teams[i])
            continue
        }
        if (i%12==9) {
            team10.push(teams[i])
            continue
        }
        if (i%12==10) {
            team11.push(teams[i])
            continue
        }
        if (i%12==11) {
            team12.push(teams[i])
            continue
        }
    }
    return (
        <div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team01}/></div>
                <div className='column'><TeamProfile teams={team02}/></div>
                <div className='column'><TeamProfile teams={team03}/></div>
                <div className='column'><TeamProfile teams={team04}/></div>
            </div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team05}/></div>
                <div className='column'><TeamProfile teams={team06}/></div>
                <div className='column'><TeamProfile teams={team07}/></div>
                <div className='column'><TeamProfile teams={team08}/></div>
            </div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team09}/></div>
                <div className='column'><TeamProfile teams={team10}/></div>
                <div className='column'><TeamProfile teams={team11}/></div>
                <div className='column'><TeamProfile teams={team12}/></div>
            </div>
        </div>
    )
}