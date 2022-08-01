import React from 'react';
import {StaticImages} from '../../assets'
import '../Footer/Footer.scss'
import AppContainer from '../AppContainer';
import MotionWrap from '../MotionWrap';

const Footer = () => {
  return (
    <footer className='app__footer-container'>
      <div>
			<h2 className="head-text">Get in Touch</h2>
      </div>
		  <div class="app__footer-card-container">
        <div className="app__footer-card ">
          <img src={StaticImages.email} alt="email" />
          <a href="mailto:hello@tiffanykancode.com" className="p-text">hello@tiffankancode.com</a>
        </div>
        <div className="app__footer-card ">
          <img src={StaticImages.linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/tiffany-kanjanabout/" className="p-text">@tiffany-kanjanabout</a>
        </div>
        <div className="app__footer-card">
          <img src={StaticImages.github} alt="github" />
          <a href="https://github.com/tiffanynk" className="p-text">@tiffanynk</a>
        </div>
        <div className="app__footer-card">
          <img src={StaticImages.twitter} alt="twitter" />
          <a href="https://twitter.com/tiffanynitk" className="p-text">@tiffanynitk</a>
        </div>
			</div>
	</footer>
  )
};

export default AppContainer(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
