<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">

    <!-- PAGE TITLE -->
    <title>BENMADELIN. Portfolio</title>

    <!-- SITE META DATA -->
    <meta name="keywords" content="professional, portfolio, software engineering, developer">
    <meta name="description" content="Professional portfolio site to showcase personal projects and achievements.">
    <meta name="author" content="Ben Madelin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SITE RESOURCES -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/c642229718.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="icon" type="image/png" href="img\favicon.png">

    <!-- PAGE STYLING -->
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <!-- PAGE CONTAINER -->
    <div class="wrapper">

        <!-- NAVBAR -->
        <header class="flex-header">
            <!--<img src="img\portfolio-logo.png" class="header-logo" alt="Portfolio Logo">-->
            <h1 class="header-logo">ben madelin.</h1>

            <nav>
                <ul class="nav-links">
                    <li><a href="#profile-section">Profile</a></li>
                    <li><a href="#project-section">Showcase</a></li>
                    <li><a href="#experience-section">Background</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </nav>

        </header>

        <!-- CONTENT -->
        <main class="content-container">

            <div id="profile-section section" class="flex-vertical">
                <section id="profile-container" class="section flex-horizontal">
                    <img src="profile-photo.jpeg" class="profile-img" alt="Professional Profile Headshot">

                    <div class="flex-vertical">
                        <div class="section-title">Profile</div>

                        <div class="section-content">
                            <p>Enthusiastic and detail-oriented Software Engineering Undergraduate at Liverpool John Moore’s University offering a pro-active approach and driven to successfully finish projects and meet all assigned goals and objectives within schedule. <wbr />Experienced and proficient using tools throughout the project development lifecycle. <wbr />I am able to think critically and problematically, self-manage and collaborate effectively engaging as part of a productive team.</p>
                        </div>

                        <div class="section-content hidden">
                            <p>Or to put it simply: professional Googler and part time wizard / miracle worker.</p>

                            <p>Check out my socials!</p>

                            <div class="section-interaction">
                                <a href="https://www.linkedin.com/in/madelinben/"><button>LinkedIn</button></a>
                                <a href="https://github.com/madelinben/"><button>GitHub</button></a>
                            </div>
                        </div>

                    </div>
                </section>

                <br />

                <div class="flex-col">
                    <section id="skill-container" class="flex-vertical">
                        <div class="section-title">Proficient Skills</div>

                        <div class="section-content">
                            <ul class="skill-bullet">
                                <li>SDLC – Git – Agile (Scrum)</li>
                                <li>UML – OOD – MVC</li>
                                <li>VB.NET – Python – Java – PHP7</li>
                                <li>HTML5 – CSS3 – JavaScript (ES6)</li>
                                <li>Bootstrap – JQuery</li>
                                <li>MySQL – JSON – XML</li>
                            </ul>
                        </div>

                        <div class="section-content hidden"> <!--TITLE: Intercommunication Skills-->
                            <ul class="skill-bullet">
                                <li>Independently Driven</li>
                                <li>Creative and Engaged Learner</li>
                                <li>Interpersonal Communication</li>
                                <li>Collaborative Problem Solver</li>
                                <li>Critical Thinker</li>
                                <li>Team Organisation</li>
                            </ul>
                        </div>
                    </section>

                    <section id="interest-container" class="flex-vertical">
                        <div class="section-title">Interests</div>

                        <div class="section-content">
                            <ul class="interest-bullet">
                                <li>React JS Framework</li>
                                <li>REST API</li>
                                <li>AWS Web Services</li>
                            </ul>
                        </div>

                        <div class="section-content hidden"> <!--TITLE: Hobbies-->
                            <ul class="skill-bullet">
                                <li>Tech and Video Games</li>
                                <li>Running, Karate</li>
                                <li>Guitar</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <br />

            <div id="project-section section" class="flex-vertical">
                <section id="project-container" class="section flex-horizontal">
                    <div class="flex-vertical">
                        <div class="section-title">Technical Projects</div>

                        <div class="section-content">

                            <div class="flex-horizontal project-content">
                                <img src="#" class="project-img" alt="Project Diagram">
                                <div class="flex-vertical">
                                    <h2 class="project-title">Electronic Programme Guide</h2>
                                    <div class="flex-horizontal">
                                        <p class="project-desc">Dynamic ASCII grid can view live programme data and mark favourite shows for recording. Data is obtained utilising the Bleb API.</p>
                                        <div class="flex-vertical project-links">
                                            <a href="#"><button>Demo</button></a>
                                            <a href="https://github.com/madelinben/programme-guide"><button>Git</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="flex-horizontal project-content">
                                <img src="#" class="project-img" alt="Project Diagram">
                                <div class="flex-vertical">
                                    <h2 class="project-title">Arcade Canvas</h2>
                                    <div class="flex-horizontal">
                                        <p class="project-desc">Responsive web application with account and rankings system, showcasing a collection of canvas mini-games.</p>
                                        <div class="flex-vertical project-links">
                                            <a href="#"><button>Demo</button></a>
                                            <a href="https://github.com/madelinben/arcade-canvas"><button>Git</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="flex-horizontal project-content">
                                <img src="#" class="project-img" alt="Project Diagram">
                                <div class="flex-vertical">
                                    <h2 class="project-title">Visual Algorithms</h2>
                                    <div class="flex-horizontal">
                                        <p class="project-desc">An animated visualisation of data structures and advanced sorting algorithms.</p>
                                        <div class="flex-vertical project-links">
                                            <a href="#"><button>Demo</button></a>
                                            <a href="https://github.com/madelinben/visual-algorithms"><button>Git</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="flex-horizontal project-content">
                                <img src="#" class="project-img" alt="Project Diagram">
                                <div class="flex-vertical">
                                    <h2 class="project-title">Projectile Simulator</h2>
                                    <div class="flex-horizontal">
                                        <p class="project-desc">Student homework application that implements Forms chart element to clearly visualise projectile algorithms and login system that utilises a normalised Access relational database.</p>
                                        <div class="flex-vertical project-links">
                                            <a href="#"><button>Demo</button></a>
                                            <a href="https://github.com/madelinben/projectile-simulator"><button>Git</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                </section>
            </div>

            <br />

            <section id="experience-section">
                <div class="section-title">Experience</div>
                <hr />

            </section>

            <br />

            <section id="education-section">
                <div class="section-title">Education</div>
                <hr />

            </section>

            <br />

            <section id="accomplishment-section">
                <div class="section-title">Accomplishments</div>
                <hr />

            </section>

            <br />

            <div id="contact-section section" class="flex-vertical">
                <section id="contact-container" class="section flex-horizontal">
                    <div class="flex-vertical">
                        <div class="section-title">Contact</div>

                        <div class="section-content">

                            <form id="contact-form">
                                <div class="flex-vertical">
                                    <input type="hidden" name="contact_number">

                                    <div class="flex-horizontal">
                                        <label>Name</label>
                                        <input type="text" name="user_name">
                                    </div>

                                    <div class="flex-horizontal">
                                        <label>Email</label>
                                        <input type="email" name="user_email">
                                    </div>

                                    <div class="flex-horizontal">
                                        <label>Message</label>
                                        <textarea name="message"></textarea>
                                    </div>

                                    <input type="submit" value="Send">
                                </div>
                            </form>

                        </div>
                </section>
            </div>

        </main>

        <!-- FOOTER -->
        <footer>
            <a href="https://github.com/madelinben/"><i class="footer-credit">~ Ben Madelin ~</i></a>
        </footer>
    </div>
</body>

<script>
    $(document).ready(function() {
        $('.section-title').click(function(e) {
            $(this).parent().children('.section-content').slideToggle();
        });
    });
</script>

</html>