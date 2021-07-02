import React from 'react';
import { PropTypes } from 'prop-types';

const Checkbox = ({ handleChange, name, checked, label }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name} className="textType4 lato color6 light">
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

export default Checkbox;
