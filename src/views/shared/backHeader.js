import React from 'react';
import { PropTypes } from 'prop-types';
import LazyImageLoader from 'Hoc/lazyImgLoader';
import { BackIcon, HlLogo } from 'Utilities/imageService';

const BackComponent = ({ actionFunc, logo, title, color }) => {
  return (
    <div className="backHeader">
      <div className={`backIcon ${color || ''}`} onClick={() => actionFunc()}>
        {BackIcon()}{' '}
      </div>
      <div className="title"> {title}</div>
      {logo && LazyImageLoader(HlLogo)}
    </div>
  );
};

BackComponent.propTypes = {
  actionFunc: PropTypes.func.isRequired,
  logo: PropTypes.bool,
  title: PropTypes.any,
  color: PropTypes.string,
};

export default BackComponent;
