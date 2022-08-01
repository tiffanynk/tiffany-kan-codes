import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppContainer from '../AppContainer';
import MotionWrap from '../MotionWrap';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
      console.log('experiences', experiences)
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      console.log('skills', skills)
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
      {skills && (
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.company}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.startYear}</p>
                <p className="app__skills-exp-year-text">to</p>
                <p className="bold-text">{experience.endYear}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.company}
                      key={experience.company}
                    >
                      <h4 className="bold-text">{experience.workTitle}</h4>
                      <p className="p-text">{experience.company}</p>
                      <p className="p-text">{experience.companyLocation}</p>
                      <p className='p-text__normal'>
                        {experience.description}
                      </p>
                    </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppContainer(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__splitbg',
);
