import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import FilterResults from 'react-filter-search';
// import * as FaIcons from 'react-icons/fa';

import Hero from '../../components/Hero/Hero';
// import SectionTitle from '../../components/SectionTitle/SectionTitle';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';

import projectData from '../../assets/data/project';
import './Project.css';

function Project() {
    const [search, setSearch] = useState('');

    return (
    <>
        <Hero />

        <section id='search'>
            <div className='search-container'>
                <div className='styled-input'>
                    <input type='search' id='search' placeholder='' name='search' value={search} onChange={e => setSearch(e.target.value)} required/>
                    <label>Search</label>
                </div>
            </div>
        </section>

        <section id='gallery'>
            <div className='gallery-container'>
                <FilterResults
                    value={search}
                    data={projectData}
                    renderResults={results => (
                    <>
                        {results.map(i => (
                            <div key={i.id} className='card-container'> {/* animated-border */}
                            {/* // <pre>{JSON.stringify(i, null, 2)}</pre> */}
                                <div>
                                    <Link to={i.path.demo}>
                                        <img className='card-image' src={i.img} alt={i.title} loading='lazy'></img>
                                    </Link>

                                    <div className='card-header'>
                                        <p className='card-title'>{i.title}</p>
                                    </div>

                                    <p className='card-description'>{i.desc}</p>
                                </div>

                                <div>
                                    <div className='card-content'>
                                        <p className='project-tech-stack'>
                                            {i.techStack.map((tech, index) => (
                                                <span key={index}>
                                                    <a href={tech.src}>{tech.title}</a>
                                                </span>
                                            ))}
                                        </p>
                                    </div>

                                    <div className='card-footer'>
                                        <span>
                                            <a href={i.path.git}>Github{/* <FaIcons.FaGithub /> */}</a>
                                        </span>

                                        <span>
                                            <Link to={i.path.demo}>Demo{/* <FaIcons.FaExternalLinkAlt /> */}</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                    )}
                />
            </div>
        </section>
    </>
    );
}

export default Project;