import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import View from 'Views';

const Root = () => {
  return (
    <BrowserRouter>
      <View />
    </BrowserRouter>
  );
};

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById('root'));
