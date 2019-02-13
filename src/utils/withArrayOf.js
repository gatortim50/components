import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { ValueContext } from './withValue'
import { ArrayValue } from 'react-values'
import { getDisplayName } from 'utils/displayName'
import { Flex } from 'FlexBox'

export const withArrayOf = (ArrayItem, ArrayWrapper = Flex) => {
  class Enhance extends React.Component {

    static Item = ArrayItem

    static displayName = `withArrayOf(${getDisplayName(ArrayItem)})`

    static propTypes = {
      name: PropTypes.string.isRequired,
      readOnly: PropTypes.bool,
      value: PropTypes.arrayOf(PropTypes.any),
      children: PropTypes.node
    }

    static defaultProps = {
      readOnly: false,
      children: null
    }

    render () {
      const {
        name,
        value,
        defaultValue,
        onChange,
        readOnly,
        children,
        variant
      } = this.props

      return (
        <ArrayValue
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={readOnly}
        >
          {valueProps => (
            <ValueContext.Provider value={valueProps}>
              <ArrayWrapper>
                {React.Children.map(children, (element, index) =>
                  React.cloneElement(element, {
                    key: `${name}-${index}`,
                    name: `${
                      element.props.name
                        ? element.props.name
                        : `${name}-${index}`
                    }`,
                    readOnly,
                    variant: element.props.variant || variant,
                    value: valueProps.value && valueProps.value[index],
                    onChange: newValue => {
                      valueProps.value[index] = newValue
                      valueProps.set(valueProps.value)
                    },
                    isArray: true
                  })
                )}
              </ArrayWrapper>
            </ValueContext.Provider>
          )}
        </ArrayValue>
      )
    }

  }

  hoistNonReactStatics(Enhance, ArrayWrapper)
  return Enhance
}
