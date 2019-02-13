import React, { createContext, memo } from 'react'

const { Provider, Consumer } = createContext(10)

export const Stack = memo(({ children, value }) => (
  <Consumer>
    {prevValue => {
      const currentValue = Math.max(prevValue, value)
      const nextValue = currentValue + 1

      return <Provider value={nextValue}>{children(currentValue)}</Provider>
    }}
  </Consumer>
))

Stack.defaultProps = {
  value: 0
}
