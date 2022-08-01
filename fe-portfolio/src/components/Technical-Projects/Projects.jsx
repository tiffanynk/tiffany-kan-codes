import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppContainer from '../AppContainer';
import MotionWrap from '../MotionWrap';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
    <div className='app__project-header'>
      <h2 className="head-text__purple">My <span>Technical</span> Projects</h2>

    { projects.length < 2 
      ? null
      : (
          <div className="app__project-filter">
            {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
              <div
                key={index}
                onClick={() => handleProjectFilter(item)}
                className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
      )
    }
    </div>

      <motion.div
        aria-label='project-card'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProjects.map((project, index) => (
          <div 
            className="app__project-item app__flex" 
            key={index}
            aria-label={`project-item-${index}`}
            >
            <div
              className="app__project-img app__flex"
            >
              <img src={urlFor(project.imgUrl)} alt={project.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 
                className="bold-text" 
                style={{ color: '#2C497F'}}>
                {project.title}
              </h4>
              <div className='app__project-description'>
                <p
                  className="" 
                  style={{ color: '#030303' }}>
                  {project.description}
                </p>
              </div>
              <div className="app__project-tag-container app__flex">
              {project.tags.map((tag, index) => (
                <div className="app__project-tag app__flex"
                key={index}
                >
                  <div>{tag}</div>
                </div>
              ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppContainer(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg',
);
