import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div id='layout-wrapper'>
            <Helmet>
                <title>{config.siteTitle}</title>
                <meta name='description' content={config.siteDescription} />
            </Helmet>
            <NavBar isActive={isActive} toggleNavbar={() => setIsActive(!isActive)} />
            <div id='content-wrapper'>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
