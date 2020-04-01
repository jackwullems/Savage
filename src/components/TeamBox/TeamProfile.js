import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import 'bulma-helpers/css/bulma-helpers.min.css'

export default ({teams}) => {
    if (teams.length == 0) {
        return (
            <div/>
        )
    }
    const profile = teams[0]
    return (
        <div className='relative'>
            <img src={profile.img} height='300' className='profile-image'/>
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
    )
}