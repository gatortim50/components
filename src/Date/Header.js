import styled from 'styled-components'
import { Icon } from 'Icon'
import React from 'react'
import { themeGet } from 'defaultTheme'
import { Flex } from 'FlexBox'
import format from 'date-fns/format'
import { Text } from 'Text'

const StyledHeader = styled(Flex)`
  border-radius: 0;
  padding: 18px 23px 9px 23px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
`

const Month = styled(Text)`
  text-transform: uppercase;
  align-self: center;
  text-align: left;
  color: ${themeGet('colors.darkerGray')};
  font-size: ${themeGet('fontSizes.1')};
  font-family: ${themeGet('fonts.sansSerif')};
  letter-spacing: ${themeGet('letterSpacings.0')};
  line-height: ${themeGet('lineHeights.1')};
  user-select: none;
`

export const Header = props => {
  const { date, decreaseMonth, increaseMonth } = props
  const iconColor = themeGet('colors.lighterGray')(props)

  return (
    <StyledHeader>
      <Month>{format(date, 'MMM Y')}</Month>
      <Flex>
        <Icon
          icon='chevron_left'
          color={iconColor}
          onClick={decreaseMonth}
          size={3}
          mr={'7px'}
        />
        <Icon
          icon='chevron_right'
          color={iconColor}
          onClick={increaseMonth}
          size={3}
        />
      </Flex>
    </StyledHeader>
  )
}
