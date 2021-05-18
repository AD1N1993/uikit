import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { ConnectedRouter } from 'connected-react-router'

import routes from '../routes'
import createStore from '../store'

const initialState = window.__INITIAL_STATE__
const { store, history } = createStore({ initialState })

const render = (Routes: RouteConfig[]) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{renderRoutes(Routes)}</ConnectedRouter>
    </Provider>,
    document.getElementById('creative-hub'),
  )
}

render(routes as RouteConfig[])

// @ts-expect-error
if (module.hot) module.hot.accept()
