import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import savageLogo from '../../assets/img/savage.png'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-black is-fixed-top'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={savageLogo} width='40'/>
            {/* <strong>Gatsby Starter Business</strong> */}
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-start'>
            <Link className='navbar-item' to='/'>
                            Home
            </Link>
            <Link className='navbar-item' to='/about'>
                            About Us
            </Link>
            <Link className='navbar-item' to='/work'>
                            Our work
            </Link>
            <Link className='navbar-item' to='/services'>
                            Services
            </Link>
            <Link className='navbar-item' to='/careers'>
                            Careers
            </Link>
            <Link className='navbar-item' to='/resources'>
                            Resources
            </Link>
            <Link className='navbar-item' to='/contact'>
                            Contact Us
            </Link>
          </div>
          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
