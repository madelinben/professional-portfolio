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
import Navbar from './components/Navbar/Navbar';

// Routes
import Profile from './routes/Profile/Profile';
import Project from './routes/Project/Project.js';
import Contact from './routes/Contact/Contact.js';
// import Blog from './routes/Blog/Blog';
import NotFound from './routes/NotFound/NotFound';

function App() {
    const [theme, setTheme] = useLocalStorage('theme', null);

    useEffect(() => {
        if (!theme || (theme === 'dark-theme')) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            setTheme('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            setTheme('light-theme');
        }
    };

    return (
        <Router>
            <div id='layout-wrapper' /* data-theme={theme} */>
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
                    <div id='nav-wrapper'><Navbar /></div>
                </header>

                <div id='content-wrapper'>
                    <Switch>
                        <Route path="/" exact component={Profile} />
                        <Route path="/project" exact component={Project} />
                        {/* <Route path="/project/:selected" exact component={SelectedProject} /> */}
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