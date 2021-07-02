import React from 'react';
import { PropTypes } from 'prop-types';
import { isDeviceMobile } from 'Utilities/helperUtils';

export const DesktopMakover = ({ children, showMobileHeader }) => {
  return (
    <div
      className={`desktopMakover ${isDeviceMobile() ? 'mobile' : 'desktop'}`}
    >
      <div
        className={`logo-container ${showMobileHeader ? '' : 'hideHeader'}`}
      ></div>
      <div className="centered"> {children} </div>
    </div>
  );
};

DesktopMakover.propTypes = {
  children: PropTypes.any,
  showMobileHeader: PropTypes.bool,
};

export const DesktopHomeMakover = ({ children }) => {
  return (
    <div
      className={`desktopHomeMakover ${
        isDeviceMobile() ? 'mobile' : 'desktop'
      }`}
    >
      <div className="centered"> {children} </div>
    </div>
  );
};

DesktopHomeMakover.propTypes = {
  children: PropTypes.any,
  showMobileHeader: PropTypes.bool,
};

const MobDesktopConverter = ({ children, color1, color2 }) => {
  return (
    <div
      className={`mobDesktop ${
        isDeviceMobile() ? `mobile ${color1 || ''}` : 'desktop'
      }`}
    >
      <div className={`part1 ${color1 || ''}`}> {children[0]}</div>
      <div className={`part2 ${color2 || ''}`}> {children[1]}</div>
    </div>
  );
};

MobDesktopConverter.propTypes = {
  color1: PropTypes.string,
  color2: PropTypes.string,
  children: PropTypes.any,
};

export default MobDesktopConverter;
