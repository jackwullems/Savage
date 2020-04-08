import React, {useEffect} from 'react'

export default ({service}) => {
    return (
        <div className='flex-column relative has-margin-50 serviceComponent'>
            <p className='font-50'>{service.title}</p>
            <p className='font-22 left-highlight has-padding-left-20'>{service.description}</p>
            <a className='read-more'>Read More</a>
            <img src={service.img} className='absolute'/>
        </div>
    )
}