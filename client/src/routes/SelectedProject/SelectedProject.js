import React, {useState, useEffect} from 'react';
import axios from "axios";

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import projectData from '../../assets/data/project';
import './SelectedProject.css';

function Profile(props) {
    // const [project, setProject] = useState(props);

    const [id, setID] = useState(props.match.params.selected);
    const [data, setData] = useState(projectData.find((project) => project.id === id));
    
    const [source, setSource] = useState(`${process.env.PUBLIC_URL}/repo/`);

    // const [markdown, setMarkdown] = useState(`../../assets/markdown/${id}/README.md`);
    const [markdown, setMarkdown] = useState(data.path.readme);
    const [content, setContent] = useState(null);
    


    useEffect(() => {
      const projectObject = projectData.find((project) => project.id === id);
      if (!!projectObject) {
        setData(projectObject);
        setSource(source.concat(data.path.src));
        setMarkdown(data.path.readme);
      }

      /* import(`../../assets/markdown/visual-algorithms/README.md`)
          .then(res => {
              fetch(res.default)
                  .then(res => res.text())
                  .then(res => setContent(res))
                  .catch(err => console.log(err));
          })
          .catch(err => console.log(err)); */

          axios.get(markdown).then((response) => {
            setContent(response.data);
          });

  }, []);

    return (
    <>
    <section aria-label='project demo' id='demo'>
        <div className='frame-wrapper'>
          <div className='frame-header'>
            
            {/* <p>{id} &gt;&gt; src &gt;&gt; index.html</p> */}
                <span>
                  <h2>Repo: <strong>{id}</strong></h2>
                  <p>{source}</p>
                </span>
            {/* <p className='project-title'> */}
                <span className='frame-link'>
                  {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                    <a href={data.path.git}><FaIcons.FaGithub /></a>
                    {/* <Link to={data.path.demo}><FaIcons.FaExternalLinkAlt /></Link> */}
                </span>
            {/* </p> */}

          </div>
          <iframe id='demoFrame' className='frame-container' 
              src={source} 
              // width={'100%'} height={'100%'}
              title={`${props.match.params.selected}`} 
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full' 
              sandbox='allow-scripts allow-modal allow-same-origin' 
              loading='eager'>
          </iframe>

          <div className='frame-description'>
            <h2>Description: <code><strong>README.md</strong></code></h2>
            {/* <p>{id} &gt;&gt; src &gt;&gt; index.html</p> */}
          </div>

          <div className='frame-markdown'>
                <ReactMarkdown remarkPlugins={[gfm]}>{content ? content : 'Error collecting markdown document.'}</ReactMarkdown>
                {/* <Markdown>{content ? content : 'Error collecting markdown document.'}</Markdown> */}
            </div>
        </div>
    </section>
    </>
    );
}

export default Profile;