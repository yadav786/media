import React, { useState, useEffect } from 'react';
import { FallbackExePic } from 'Utilities/imageService';

const ImageLoader = (image, style = {}) => {
  const [src, setSrc] = useState('');
  useEffect(() => {
    if (typeof image === 'object') {
      image.then(res => {
        setSrc(res);
      });
    } else if (typeof image === 'string') {
      setSrc(image);
    }
  }, [image]);
  const addDefaultSrc = event => {
    event.target.src = FallbackExePic; /*eslint-disable-line*/
  };
  return <img src={src} style={style} onError={addDefaultSrc} />;
};

export default ImageLoader;
