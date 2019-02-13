import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { width, space, px } from 'styled-system'
import { themeGet, variant } from 'defaultTheme'
import { Icon } from 'Icon'
import { lighten, darken, transparentize, stripUnit } from 'polished'

const getHorizontalPadding = props => stripUnit(themeGet('space.5')(props)) / 2 // 20
const getIconPadding = props =>
  Math.floor(getHorizontalPadding(props) * (1 / 3)) // 6

const StyledIcon = styled(Icon).attrs({
  size: 3
})``

const buttonStyle = variant({
  key: props => props.themeKey
})

const padding = ({ iconAfter, iconBefore, hasText, ...props }) => {
  const horizontalPadding = px(getHorizontalPadding(props))
  return {
    padding: `${[
      0, // top
      // Add larger right padding when the button label ends with text
      !iconAfter && hasText ? horizontalPadding : px(getIconPadding(props)), // right
      0, // bottom
      // Add larger left padding when the button label starts with text
      !iconBefore && hasText ? horizontalPadding : px(getIconPadding(props)) // left
    ].join(' ')}`
  }
}

const lighterFg = ({ fgColor }) => (fgColor ? lighten(0.1, fgColor) : 'none')
const lighterBg = ({ bgColor }) => (bgColor ? lighten(0.1, bgColor) : 'none')

const darkerFg = ({ fgColor }) => (fgColor ? darken(0.2, fgColor) : 'none')
const darkerBg = ({ bgColor }) => (bgColor ? darken(0.2, bgColor) : 'none')

const transparentFg = ({ fgColor }) =>
  fgColor ? transparentize(0.5, fgColor) : 'none'
const transparentBg = ({ bgColor }) =>
  bgColor ? transparentize(0.5, bgColor) : 'none'

const StyledButton = styled.button.attrs(props => ({
  fgColor: props.fgColor || buttonStyle(props).color,
  bgColor: props.bgColor || buttonStyle(props).background
}))`
  display: flex;
  box-sizing: border-box;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'cursor')};
  justify-content: center;
  align-items: center;
  height: ${themeGet('space.4')};
  min-width: ${themeGet('space.4')};
  font-size: ${themeGet('fontSizes.1')};
  letter-spacing: ${themeGet('letterSpacings.3')};
  line-height: ${themeGet('lineHeights.0')};
  font-weight: ${themeGet('fontWeights.5')};
  text-transform: uppercase;
  margin-top: 2px;
  margin-bottom: 6px;
  border: none;
  border-radius: calc(${themeGet('space.1')} / 2);
  ${buttonStyle};
  ${width};
  ${space};
  ${padding};
  ${StyledIcon} * {
    margin-top: -2px;
    fill: ${({ fgColor }) => fgColor};
  }

  &:hover {
    color: ${lighterFg};
    background-color: ${lighterBg};
    ${StyledIcon} * {
      fill: ${lighterFg};
    }
  }

  &:active {
    color: ${darkerFg};
    background-color: ${darkerBg};
    ${StyledIcon} * {
      fill: ${darkerFg};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${themeGet('colors.light')};
  }

  &:disabled {
    color: ${transparentFg};
    background-color: ${transparentBg};
    cursor: default;
    ${StyledIcon} * {
      fill: ${transparentFg};
    }
  }
`

const ButtonComponent = ({
  forwardedRef,
  iconBefore,
  iconAfter,
  iconSize,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      ref={forwardedRef}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      hasText={!!children}
      {...rest}
    >
      {iconBefore && (
        <StyledIcon
          icon={iconBefore}
          mr={children ? px(getIconPadding(rest)) : 0}
          size={iconSize}
        />
      )}
      {children}
      {iconAfter && (
        <StyledIcon
          icon={iconAfter}
          ml={children || iconBefore ? px(getIconPadding(rest)) : 0}
          size={iconSize}
        />
      )}
    </StyledButton>
  )
}

ButtonComponent.propTypes = {
  ...buttonStyle.propTypes,
  ...width.propTypes,
  children: PropTypes.node,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string
}

ButtonComponent.defaultProps = {
  variant: 'default',
  iconBefore: null,
  iconAfter: null,
  iconSize: 3,
  themeKey: 'buttons',
  width: 'auto'
}

// NOTE: this is required to be used in places that require a ref
// such as our Popover component
// eslint-disable-next-line react/display-name
export const Button = React.forwardRef((props, ref) => (
  <ButtonComponent {...props} forwardedRef={ref} />
))
