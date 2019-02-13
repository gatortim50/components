import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { darken, transparentize } from 'polished'
import { Pane } from 'Pane'
import { Text } from 'Text'
import { Icon } from 'Icon'
import { themeGet } from 'defaultTheme'

const StyledMenuItem = styled(Pane).attrs(props => ({
  height: themeGet('space.5')(props),
  _white: themeGet('colors.white')(props),
  _dark: themeGet('colors.dark')(props)
}))`
  align-items: center;
  background-color: ${themeGet('colors.white')};
  cursor: pointer;
  display: flex;
  height: ${themeGet('space.6')};
  position: relative;
  user-select: none;
  padding-top: 2px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => darken(0.025, props._white)};
  }

  &:active {
    background-color: ${props => transparentize(0.95, props._dark)};
  }

  &:focus {
    box-shadow: 0 0 3px 2px ${themeGet('colors.light')};
    outline: none;
    z-index: 1;
  }
`

const getItemColor = variant => {
  switch (variant) {
    case 'danger':
    case 'success':
      return variant
    default:
      return 'darkestGray'
  }
}

const getIconColor = variant => {
  switch (variant) {
    case 'danger':
    case 'success':
      return variant
    default:
      return 'lighterGray'
  }
}

export class Item extends PureComponent {

  onKeyPress = event => {
    const { onClick } = this.props

    if (onClick) {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick(event)
        event.preventDefault()
      }
    }
  }

  render () {
    const { children, icon, variant, ...etc } = this.props
    const color = getItemColor(variant)
    const fill = getIconColor(variant)

    return (
      <StyledMenuItem
        role='menuitem'
        tabIndex='0'
        onKeyPress={this.onKeyPress}
        {...etc}
      >
        {icon && <Icon icon={icon} ml={3} color={fill} />}
        <Text mt='3px' ml={2} mr={2} color={color} fontSize={1}>
          {children}
        </Text>
      </StyledMenuItem>
    )
  }

}
