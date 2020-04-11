import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import 'bulma-helpers/css/bulma-helpers.min.css'

import settings from '../../assets/scss/settings.scss'

export default ({teams}) => {
    if (teams.length == 0) {
        return (
            <div/>
        )
    }
    const profile = teams[0]
    return (
        <div className='profileBox'>
            {
                settings.buildAnimation == 'true' &&
                <div className='profileBack flex-column justify-space-around align-center'>
                    <p className='font-40 has-text-centered'>{profile.title}</p>
                    <p className='font-12 has-text-centered'>{profile.subTitle}</p>
                    <p className='font-14 has-text-centered'>{profile.text}</p>
                </div>
            }
            <div className='profileFront'>
                <img src={profile.img} className='profileImage'/>
                <div className='profile'>
                    <p className='profile-name'>{profile.name+' '+profile.surName}</p>
                    <p className='font-10-highlight'>{profile.description}</p>
                    <div className='flex-row'>
                        <FontAwesomeIcon className='has-margin-10' icon={faInstagram} />
                        <FontAwesomeIcon className='has-margin-10' icon={faTwitter} />
                        <FontAwesomeIcon className='has-margin-10' icon={faFacebook} />
                    </div>
                </div>
            </div>
        </div>
    )
}