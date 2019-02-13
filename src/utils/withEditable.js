import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { getDisplayName } from 'utils/displayName'

/* eslint-disable react/display-name */
export const withValueAsChildren = WrappedComponent => ({
  value,
  ...props
}) => <WrappedComponent {...props}>{value}</WrappedComponent>
/* eslint-enable react/display-name */

export const withEditable = (EditComponent, ViewComponent) => {
  class Enhance extends React.Component {

    static propTypes = {
      readOnly: PropTypes.bool
    }

    static defaultProps = {
      readOnly: false
    }

    static displayName = `withEditable(${getDisplayName(EditComponent)})`

    render () {
      const { readOnly = false, ...rest } = this.props

      const WrappedComponent =
        !readOnly || !ViewComponent ? EditComponent : ViewComponent

      return <WrappedComponent {...rest} readOnly={readOnly} />
    }

  }

  hoistNonReactStatics(Enhance, EditComponent)

  if (ViewComponent) {
    hoistNonReactStatics(Enhance, ViewComponent)
  }

  return Enhance
}

withEditable.displayName = 'withEditable'

withEditable.propTypes = {
  EditComponent: PropTypes.element.isRequired,
  ViewComponent: PropTypes.node
}

withEditable.defaultProps = {
  ViewComponent: undefined
}
