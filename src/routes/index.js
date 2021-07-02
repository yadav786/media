import asyncComponent from 'Hoc/asyncComponent';
import { ROOT } from 'Configs';

const AsyncHome = asyncComponent(() => import('Views/home'));
const PageNotFound = asyncComponent(() => import('Views/404'));

const ROUTES = [
  {
    path: ROOT,
    component: AsyncHome,
  },
  {
    component: PageNotFound,
  },
];

export default ROUTES;
