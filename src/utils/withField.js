import { withFieldContext } from './withFieldContext'
import { withWrapper } from './withWrapper'

export const withField = WrappedComponent =>
  withFieldContext(withWrapper(WrappedComponent))
