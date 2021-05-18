import { RouteConfig } from 'react-router-config'

import App from '../app'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
] as RouteConfig[]
