import asyncComponent from 'Hoc/asyncComponent';
import { ROOT } from 'Configs';

const AsyncHomePage = asyncComponent(() => import('Views/home/homePage'));
const PageNotFound = asyncComponent(() => import('Views/404'));

const ROUTES = [
  {
    exact: true,
    path: ROOT,
    component: AsyncHomePage,
  },
  {
    component: PageNotFound,
  },
];

export default ROUTES;
