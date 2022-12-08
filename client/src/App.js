import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useLocalStorage} from './hooks/useStorage/useStorage';

// Global Styles
import './assets/css/App.css';
import './assets/css/Palette.css';
import './assets/css/Scrollbar.css';
import './assets/css/Layout.css';
import './assets/css/Form.css';

// Animation
import './assets/css/Border.css';
import './assets/css/Bubble.css';

// Components
import Setting from './components/Sidebar/Setting';
import Navigation from './components/Sidebar/Navigation';
import Social from './components/Sidebar/Social';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Hero from './components/Hero/Hero';

// Routes
import Profile from './routes/Profile/Profile.js';
import Project from './routes/Project/Project.js';
import SelectedProject from './routes/SelectedProject/SelectedProject.js';
import Contact from './routes/Contact/Contact.js';
// import Blog from './routes/Blog/Blog';
import NotFound from './routes/NotFound/NotFound.js';

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const [paletteIndex, setPaletteIndex] = useLocalStorage('palette', 0);
    const paletteArray = ['sunset', 'purple', 'moonlight', 'green', 'grey'];
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    
    const togglePalette = () => {
        let newPalette = paletteIndex + 1;
        if (newPalette > (paletteArray.length - 1)) {
            newPalette = 0;
        }
        setPaletteIndex(newPalette);
    };

    return (
        <Router>
            <div id='layout-wrapper' data-theme={theme} data-palette={paletteArray[paletteIndex]}>
                <div id='bubble-background'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <header id='header-wrapper'>
                    <a id='skip-nav' href='#content-wrapper'>skip navigation</a>
                    <div id='setting-wrapper'><Setting theme={theme} toggleTheme={toggleTheme} togglePalette={togglePalette} /></div>
                    <div id='nav-wrapper'><Navigation /></div>
                    <div id='social-wrapper'><Social /></div>
                    <div id='scroll-wrapper'><ScrollToTop /></div>
                </header>

                <div id='content-wrapper'>
                    <Hero />
                    {/* <pre>{`${paletteIndex} ${paletteArray[paletteIndex]}`}</pre> */}

                    <Switch>
                        <Route path="/" exact component={Profile} />
                        <Route path="/project" exact component={Project} />
                        <Route path="/project/:selected" exact component={SelectedProject} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <footer id='footer-wrapper'>
                        {/* <p>Made with ❤️ by madelinben.</p> */}
                        <p>&copy; Benjamin Madelin {new Date().getFullYear()}</p>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;