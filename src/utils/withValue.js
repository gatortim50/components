import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import {
  ArrayValue,
  BooleanValue,
  DateValue,
  MapValue,
  NumberValue,
  ObjectValue,
  SetValue,
  StringValue,
  Value
} from 'react-values'
import { getDisplayName } from 'utils/displayName'

export const ValueContext = React.createContext()

const valueMap = {
  array: ArrayValue,
  boolean: BooleanValue,
  date: DateValue,
  map: MapValue,
  number: NumberValue,
  object: ObjectValue,
  set: SetValue,
  string: StringValue,
  any: Value
}

export const withValue = (valueType, WrappedComponent) => {
  const ValueWrapper = valueMap[valueType] || valueMap['any']

  class Enhance extends React.Component {

    static displayName = `withValue(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      readOnly: PropTypes.bool,
      value: PropTypes.any
    }

    static defaultProps = {
      readOnly: false
    }

    render () {
      const {
        value,
        defaultValue,
        onChange,
        readOnly,
        ...componentProps
      } = this.props

      return (
        <ValueWrapper
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={readOnly}
        >
          {valueProps => (
            <ValueContext.Provider value={valueProps}>
              <WrappedComponent
                {...componentProps}
                value={valueProps.value}
                readOnly={readOnly}
                onChange={event => valueProps.set(event.target.value)}
              />
            </ValueContext.Provider>
          )}
        </ValueWrapper>
      )
    }

  }

  hoistNonReactStatics(Enhance, WrappedComponent)
  return Enhance
}

withValue.propTypes = {
  valueType: PropTypes.oneOf(Object.keys(valueMap)),
  WrappedComponent: PropTypes.node.isRequired
}
