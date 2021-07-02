import React from 'react';
import { PropTypes } from 'prop-types';
import 'Styles/dialogComponent';

const DialogComponent = ({ content, onClose, closeAllow, className }) => {
  return (
    <div className={`dialogComponent ${className || ''}`}>
      {closeAllow && <div className="outerDiv" onClick={() => onClose()}></div>}
      <div className="innerDiv">
        {closeAllow && (
          <div className="cross" onClick={() => onClose()}>
            &#10005;
          </div>
        )}
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

DialogComponent.propTypes = {
  content: PropTypes.any,
  onClose: PropTypes.func,
  closeAllow: PropTypes.bool,
  className: PropTypes.string,
};

export default DialogComponent;
