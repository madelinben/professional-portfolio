import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';

import './ScrollToTop.css';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.getElementById('content-wrapper').addEventListener('scroll', (e) => {
            toggleVisibility();
        });
    }, []);

    const toggleVisibility = () => {
        const scrollOffset = document.getElementById('content-wrapper').scrollTop;
        const triggerHeight = document.getElementById('hero').offsetHeight;
        if (scrollOffset > triggerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScroll = () => {
        document.getElementById('content-wrapper').scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
    <>
        {isVisible ? (
            <div className='scroll-container'>
                <ul className='scroll-items'>
                    <li><div className='horizontal-line'></div></li>
                    <li className='scroll-text'>
                        <div className='scroll-link' onClick={handleScroll}>
                            <FaIcons.FaAngleDoubleUp />
                            <span>Scroll To Top</span>
                        </div>
                    </li>
                    <li><div className='vertical-line'></div></li>
                </ul>
            </div>
        ) : null}
    </>
    );
}

export default ScrollToTop;