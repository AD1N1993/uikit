import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export default (history: History): any => ({
  router: connectRouter(history) as any,
})
