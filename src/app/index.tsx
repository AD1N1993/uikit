import { renderRoutes, RouteConfig } from 'react-router-config'

import styles from './styles.module.scss'

interface Route {
  route: { routes: RouteConfig[] }
}

const App = ({ route }: Route): JSX.Element => (
  <div className={styles.hub}>{renderRoutes(route.routes)}</div>
)

export default App
