import React, { memo } from 'react'
import styled from 'styled-components'
import { darken, transparentize } from 'polished'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { Text } from 'Text'
import { Icon } from 'Icon'
import { themeGet } from 'defaultTheme'

const StyledItem = styled(Link).attrs(props => ({
  _white: themeGet('colors.white')(props),
  _dark: themeGet('colors.light')(props)
}))`
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  box-sizing: border-box;
  color: ${themeGet('colors.black')};
  cursor: pointer;
  display: flex;
  height: 44px;
  position: relative;
  user-select: none;
  text-decoration: none;
  margin-bottom: 8px;

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

  &.parent-active {
    background-color: ${themeGet('colors.lightestGray')};
  }

  &.parent-active:hover {
    background-color: ${props => darken(0.075, props._white)};
  }

  &.parent-active:active {
    background-color: ${themeGet('colors.lighterGray')};
  }

  &.active {
    background-color: ${themeGet('colors.light')};
    color: ${themeGet('colors.white')};
  }

  &.active:hover {
    background-color: ${themeGet('colors.lighter')};
  }

  &.active:active {
    background-color: ${themeGet('colors.darker')};
  }
`

function ItemComponent ({
  children,
  icon,
  location,
  parentActive,
  staticContext,
  ...etc
}) {
  const active = location.pathname === etc.to
  const className = classNames({ active, 'parent-active': parentActive })

  return (
    <StyledItem role='menuitem' tabIndex='0' className={className} {...etc}>
      {icon && (
        <Icon icon={icon} ml={2} color={active ? 'white' : 'lightGray'} />
      )}
      <Text
        as='span'
        ml={2}
        mr={2}
        caps
        fontSize={1}
        lineHeight={0}
        fontWeight={5}
        letterSpacing={3}
      >
        {children}
      </Text>
    </StyledItem>
  )
}
export const Item = withRouter(memo(ItemComponent))
