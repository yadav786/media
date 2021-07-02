import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import { dateDiff } from 'Utilities/dateUtil';
import { ROOT } from 'Configs';
import RouteSlug from './routes';
import 'Styles/home.scss';

const Home = () => {
  const renderRoutes = () => {
    return RouteSlug.map((route, i) => (
      <Route
        exact={route.exact}
        key={i}
        path={route.path}
        render={() =>
          [ROOT].includes(route.path) ? (
            <route.component />
          ) : (
            <Redirect to={ROOT} />
          )
        }
      />
    ));
  };

  return (
    <div className="home">
      <div className="view">
        <Switch>{renderRoutes()}</Switch>
      </div>
    </div>
  );
};

export default Home;
