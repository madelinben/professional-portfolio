<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">

    <!-- PAGE TITLE -->
    <title>Professional Portfolio</title>

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
                    <img src="profile-headshot.jpeg" class="profile-img" alt="Professional Profile Headshot">

                    <div class="flex-vertical">
                        <div class="section-title">Profile</div>

                        <div class="section-content">
                            <p>Enthusiastic and detail-oriented Software Engineering Undergraduate at Liverpool John Moore’s University offering a pro-active approach and driven to successfully finish projects and meet all assigned goals and objectives within schedule. <wbr />Experienced and proficient using tools throughout the project development lifecycle. <wbr />I am able to think critically and problematically, self-manage and collaborate effectively engaging as part of a productive team.</p>
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
                    </section>
                </div>
            </div>

            <br />








            <section id="project-section">
                <div class="section-title">Technical Projects</div>
                <hr />

            </section>

            <br />

            <section id="experience-section">
                <div class="section-title">Experience/Employment</div>
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

            <section id="contact-section">
                <div class="section-title">Contact</div>
                <hr />

            </section>

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