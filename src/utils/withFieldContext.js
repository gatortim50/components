import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { getDisplayName } from 'utils/displayName'

export const FieldContext = React.createContext({})

export const withFieldContext = WrappedComponent => {
  class Enhance extends React.Component {

    static propTypes = {
      readOnly: PropTypes.bool,
      value: PropTypes.any,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    }

    static defaultProps = {
      readOnly: false,
      value: undefined,
      onFocus: () => {},
      onBlur: () => {}
    }

    static displayName = `withFieldContext(${getDisplayName(WrappedComponent)})`

    // We handle common form state listeners here
    // And set them up into the FieldContext, so that they
    // can be accessed by any children
    state = {
      focused: false
    }

    handleOnFocus = event => {
      this.setState({ focused: true }, () => this.props.onFocus(event))
    }

    handleOnBlur = event => {
      this.setState({ focused: false }, () => this.props.onBlur(event))
    }

    render () {
      const {
        value,
        readOnly = false,
        onFocus,
        onBlur,
        onFormStateChange,
        ...rest
      } = this.props

      return (
        <FieldContext.Provider
          value={{ value, readOnly, focused: this.state.focused }}
        >
          <WrappedComponent
            {...rest}
            {...this.state}
            value={value}
            readOnly={readOnly}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
          />
        </FieldContext.Provider>
      )
    }

  }

  hoistNonReactStatics(Enhance, WrappedComponent)

  return Enhance
}

withFieldContext.displayName = 'withEditable'

withFieldContext.propTypes = {
  WrappedContext: PropTypes.element.isRequired
}

withFieldContext.defaultProps = {
  WrappedContext: undefined
}
