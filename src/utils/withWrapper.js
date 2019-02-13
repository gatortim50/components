import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Label } from 'Label'
import { AssistiveText } from 'AssistiveText'
import { getDisplayName } from 'utils/displayName'
import check from 'check-types'

export const withWrapper = WrappedComponent => {
  class Enhance extends React.Component {

    static propTypes = {
      readOnly: PropTypes.bool,
      label: PropTypes.node.isRequired,
      labelIcon: PropTypes.string,
      description: PropTypes.node,
      errors: PropTypes.node
    }

    static defaultProps = {
      readOnly: false,
      label: null,
      labelIcon: null,
      description: null,
      errors: null
    }

    static displayName = `withWrapper(${getDisplayName(WrappedComponent)})`

    render () {
      const {
        readOnly,
        label,
        labelIcon,
        description,
        errors,
        width,
        focused,
        ...rest
      } = this.props
      const hasErrors = !readOnly && !!errors
      const assistiveText = hasErrors ? errors : description

      return (
        <React.Fragment>
          {check.string(label) ? (
            <Label icon={labelIcon} focused={focused} hasErrors={hasErrors}>
              {label}
            </Label>
          ) : (
            label
          )}

          <WrappedComponent
            {...rest}
            readOnly={readOnly}
            focused={focused}
            hasErrors={hasErrors}
          />

          {!readOnly && assistiveText && (
            <AssistiveText focused={focused} hasErrors={hasErrors}>
              {assistiveText}
            </AssistiveText>
          )}
        </React.Fragment>
      )
    }

  }

  hoistNonReactStatics(Enhance, WrappedComponent)
  return Enhance
}
