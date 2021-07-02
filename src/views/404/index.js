import React from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div>
      The page you are looking for is not found, please go back to
      <button onClick={() => history.push('/')}> Home </button> Page{' '}
    </div>
  );
};

PageNotFound.propTypes = {
  history: PropTypes.element.isRequired,
};

export default PageNotFound;
