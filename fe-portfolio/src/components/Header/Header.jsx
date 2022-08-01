import React from 'react';
import { motion } from 'framer-motion';

import AppContainer from '../AppContainer';
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-greeting">
      <h1 className="head-text">My name is Tiffany.</h1>


        <div className="app__flex">
          <p className="p-text__white">Let's create together.</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppContainer(Header, 'home');