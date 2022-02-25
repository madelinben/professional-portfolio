import React from 'react';

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

      <section id='about'>
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
            I am able self-manage and think critically, problematically,
            whilst engaging collaboratively as part of a productive and efficient team. 
          </p>
        </div>

        <button><a href='#' target='_blank' rel='noopener noreferrer'>Download Resume</a></button>
      </section>

      <section id='skill'>
        <SectionTitle title={'Proficient Skills'} />
      </section>

      <section id='experience'>
        <SectionTitle title={'Experience'} />
        <Carousel data={experienceData} />
      </section>
      
      <ProjectOverview />
    </>
    );
}

export default Profile;