import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from 'Routes';
import ErrorBoundary from 'Views/shared/errorBoundary';
// import Loader from 'Views/shared/loader';
// import Alert from 'Views/shared/alert';
import 'Styles/main.scss';

const renderRoutes = () => {
  return ROUTES.map((route, i) => (
    <Route
      exact={route.exact}
      key={i}
      path={route.path}
      component={route.component}
    />
  ));
};
const View = () => {
  return (
    <ErrorBoundary>
      <div className="root">
        <Switch>{renderRoutes()}</Switch>
      </div>
    </ErrorBoundary>
  );
};

export default View;
