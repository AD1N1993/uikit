import { lazy, Suspense } from 'react'

import { ErrorBoundary, Loading } from '../../components'

import { Props } from './Home'

const Home = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./Home')), 3000)
    }),
)

export default (props: Props): JSX.Element => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <Home {...props} />
    </Suspense>
  </ErrorBoundary>
)
