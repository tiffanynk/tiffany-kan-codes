import React from 'react';
import { motion } from 'framer-motion';
import AppContainer from '../AppContainer';
import MotionWrap from '../MotionWrap';

import './About.scss';

const About = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__about'
    >
        <h2 className="head-text__white">
          I am a <br/> <span>Fullstack Software Engineer</span>
          <br/>
          based in <span>Seattle</span>.
        </h2>


      <div className="app__profile">
        <p className='p-text__light'
        >
          I am currently building products as a SWE for Flatiron School, where I finished the software engineering bootcamp in 2021. In my free time, I am constantly looking for good food and wine, relaxing with my cat Casper, or playing video games! Sometimes, you'll catch me rock climbing.
        </p>
      </div>
    </motion.div>
  );
};

export default AppContainer(
  MotionWrap(About, 'app__about'),
  'about',
  'about__container',
  'app__primarybg'
);