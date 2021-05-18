import { memo } from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps } from 'react-router-dom'

import styles from './styles.module.scss'

type Props = RouteComponentProps

const NotFound = ({ staticContext }: Props) => {
  if (staticContext) staticContext.statusCode = 404

  return (
    <div className={styles.NotFound}>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  )
}

export default memo(NotFound)
