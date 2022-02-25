import React from 'react';
import {NavLink} from 'react-router-dom';
import {IconContext} from 'react-icons';

import navData from '../../assets/data/nav';
import contactData from '../../assets/data/contact';

import Tooltip from '../Tooltip/Tooltip';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Navbar.css';

function Navbar() {
    return (
    <>
        <IconContext.Provider value={{color: 'var(--text-primary)'}}>
            <nav className='nav-container'>
                <ul className='nav-items'>
                    <li><div className='vertical-line'></div></li>
                    {navData && navData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <NavLink to={item.path} className='nav-link' activeClassName='active'>
                                    <Tooltip text={item.title} direction='left' /* isVisible={true} */ />
                                    {item.icon}
                                    {/* <span>{item.title}</span> */}
                                {/* <Tooltip text={item.title} direction={'left'} isVisible={this.state.index === (index + 1) ? true : false} /> */}
                                </NavLink>
                            </li>
                        )
                    })}
                    <li><div className='horizontal-line'></div></li>
                </ul>
            </nav>

            <div className='social-container'>
                <ul className='social-items'>
                    <li><div className='horizontal-line'></div></li>
                    {contactData && contactData.map((item, index) => {
                        return (
                            <li key={index} className='social-text'>
                                <a href={item.src} className='social-link' target='_blank' rel='noopener noreferrer'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                {/* <Tooltip text={item.title} direction={'right'} isVisible={this.state.index === (index + 1) ? true : false} /> */}
                                </a>
                            </li>
                        )
                    })}
                    <li><div className='vertical-line'></div></li>
                </ul>
            </div>

            <ScrollToTop />
        </IconContext.Provider>
    </>
    );
}

export default Navbar;