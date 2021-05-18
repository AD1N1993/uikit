import { PureComponent, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}
interface State {
  error: Error | null
  errorInfo: { componentStack: string } | null
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }): void {
    this.setState({ error, errorInfo })
  }

  render(): ReactNode {
    const { children } = this.props
    const { errorInfo, error } = this.state

    return errorInfo ? (
      <div data-testid="error-view">
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    ) : (
      children || null
    )
  }
}

export default ErrorBoundary
