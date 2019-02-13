import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from 'Icon'
import { Text } from 'Text'
import { themeGet, variant } from 'defaultTheme'

const iconStyle = variant({
  key: 'labelIcons'
})

const StyledIcon = styled(Icon).attrs({
  size: 3
})`
  margin-right: 8px;
`

const labelStyle = variant({
  key: 'labels'
})

const StyledLabel = styled(Text).attrs({
  as: 'div'
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${themeGet('space.3')};
  text-transform: uppercase;
  padding: 0;
  margin-bottom: 4px;
  ${labelStyle};

  ${StyledIcon} * {
    ${iconStyle};
  }
`

export const Label = ({ icon, children, ...rest }) => (
  <StyledLabel {...rest}>
    {icon && <StyledIcon icon={icon} />}
    {children}
  </StyledLabel>
)

Label.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  focused: PropTypes.bool,
  hasErrors: PropTypes.bool,
  ...labelStyle.propTypes
}

Label.defaultProps = {
  variant: 'default',
  icon: null,
  fontSize: 0,
  lineHeight: 0,
  fontWeight: 5,
  letterSpacing: 1,
  caps: true,
  focused: false,
  hasErrors: false
}
