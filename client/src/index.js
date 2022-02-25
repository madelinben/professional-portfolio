import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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

/* const [theme, setTheme] = useState('light'); //TOGGLE default 'light' || 'dark' */

ReactDOM.render(
    <React.StrictMode>
        <div id='layout-wrapper' /* data-theme={theme} */>
            <div id='bubble-background'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Router>
                <div id='nav-wrapper'><Navbar /></div>
                <div id='content-wrapper'>
                    <Switch>
                        <Route path="/" exact component={Profile} />
                        <Route path="/project" exact component={Project} />
                        {/* <Route path="/project/:selected" exact component={SelectedProject} /> */}
                        <Route path="/contact" exact component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <br />
                    <section id='footer'>
                        <p>&copy; Benjamin Madelin {new Date().getFullYear()}</p>
                    </section>
                </div>
            </Router>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);