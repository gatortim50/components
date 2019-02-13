import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputIcon } from 'Input/Icon'
import { FieldContext } from 'utils/withFieldContext'

const opacity = ({ focused, readOnly, value }) =>
  focused && !readOnly && value ? 1 : 0

const StyledIcon = styled(InputIcon)`
  opacity: ${opacity};
  transition: opacity 0.1s linear;
`

StyledIcon.defaultProps = {
  size: 3,
  icon: 'close',
  color: 'lighterGray'
}

StyledIcon.propTypes = {
  ...InputIcon.propTypes,
  focused: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.string
}

export const ClearIcon = props => (
  <FieldContext.Consumer>
    {fieldProps => {
      return <StyledIcon {...fieldProps} {...props} />
    }}
  </FieldContext.Consumer>
)
