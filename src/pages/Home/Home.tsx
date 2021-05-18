import { FC, memo } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import styles from './styles.module.scss'

export type Props = RouteComponentProps

const Home: FC<Props> = (): JSX.Element => <div className={styles.home}>Hello</div>

export default memo(Home)
