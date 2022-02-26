import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Carousel from '../../components/Carousel/Carousel';
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview';

import experienceData from '../../assets/data/experience';
import './Profile.css';

function Profile() {
    return (
    <>
        <Hero />

      <section aria-label='about me' id='about'>
        <SectionTitle title={'About Me'} />

        <div className='about-container'>
          <p>
            Hi there, I am <strong>Ben</strong>. I'm an enthusiastic and detail-oriented 
            Software Engineering Undergraduate at 
            Liverpool John Moore’s University. 
          </p>
          <br />
          <p>
            Experienced and proficient using tools throughout the software development lifecycle, 
            I am driven to finish projects at the highest standard and meet all assigned goals / objectives within schedule. 
            Motivated to expand my knowledge in different areas of software development. <br />
          </p>
          <br />
          <p>
            My strengths and passions are in <strong>Data Visualisation</strong> and <strong>Progressive Web Apps</strong>, specifically with Node JS and <strong>React</strong>. 
            Using Bootstrap to create responsive sites with accessibility always in mind. 
            Implementing third party APIs with Ajax, to create dynamic and interactive applications. 
          </p>
          <br />
          <p>
            I am constantly learning. With the ability to self-manage, think critically and problematically,
            and engage collaboratively as part of a productive and efficient team. 
          </p>
        </div>

        <button /* onclick={window.open()} */><a href='../../assets/data/ben-madelin-resume.pdf' /* target='_blank' rel='noopener noreferrer' */ download>Download Resume</a></button>
      </section>

      <section aria-label='proficient skills' id='skill'>
        <SectionTitle title={'Proficient Skills'} />

        {/* TOOLS */}
        <div className='skill-wrapper'>
          <div className='skill-container'>
            <div className='skill-title'></div>
            <div className='skill-badge'>
              <FaIcons.FaGitAlt />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaFigma />
            </div>
          </div>
        {/* </div> */}

        {/* OOP */}
        {/* FaPython SiCsharp SiCplusplus */}

        {/* CORE */}
        {/* <div className='skill-wrapper'> */}
          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaHtml5 />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaCss3Alt />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiJavascript /> {/* DiJavascript */}
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiJquery />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaBootstrap />
            </div>
          </div>
        {/* </div> */}

        {/* PWA */}
        {/* <div className='skill-wrapper'> */}
          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaNodeJs />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <FaIcons.FaReact />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiExpress />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiRedux />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiJsonwebtokens />
            </div>
          </div>
        {/* </div> */}

        {/* DATABASE */}
        {/* <div className='skill-wrapper'> */}
          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiSequelize />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiMongodb />
            </div>
          </div>

          <div className='skill-container'>
            <div className='skill-badge'>
              <SiIcons.SiMysql /> {/* GrMysql */}
            </div>
          </div>
        </div>
      </section>

      <section aria-label='professional experience' id='experience'>
        <SectionTitle title={'Experience'} />
        <Carousel data={experienceData} />
      </section>
      
      <ProjectOverview />
    </>
    );
}

export default Profile;