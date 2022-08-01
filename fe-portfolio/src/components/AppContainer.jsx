import React from 'react';
import NavigationDots from './Navbar/NavigationDots';
import SocialMedia from './SocialMedia';

const AppContainer = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {idName !== 'contact' ? <SocialMedia /> : null}
      <div className="app__wrapper app__flex">
        <Component />

    {idName === 'contact' 
      ? <div className="copyright">
          <p className="p-text">
            @2022 TIFFANY KANJANABOUT
          </p>
          <p className="p-text">All rights reserved</p>
        </div>
      : null
}
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppContainer;