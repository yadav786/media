import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const initialState = {
  currentIndex: 0,
};

const TabsCreator = ({ labels, children, className }) => {
  const [state, setState] = useState(initialState);
  const handleClick = label => {
    const index = labels.indexOf(label);
    if (index !== -1) setState({ ...state, currentIndex: index });
  };

  return (
    <div className={`tabsCreater ${className}`}>
      <div className="tabs">
        {' '}
        {labels.map((label, i) => (
          <div
            key={i}
            onClick={() => handleClick(label)}
            className={`tab ${
              labels[state.currentIndex] === label ? 'selected' : ''
            }`}
          >
            {' '}
            {label}
          </div>
        ))}
      </div>
      <div className="content">
        {Array.isArray(children) ? children[state.currentIndex] : children}
      </div>
    </div>
  );
};

TabsCreator.propTypes = {
  labels: PropTypes.array.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default TabsCreator;
