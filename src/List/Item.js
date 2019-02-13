import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'defaultTheme'
import { Flex } from 'FlexBox'

export const Item = styled(Flex).attrs(props => ({
  as: 'li',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  pl: 2,
  pr: 2,
  pt: 1,
  pb: 1,
  height: themeGet('space.6')(props)
}))`
  box-sizing: border-box;
  border-bottom: 1px solid ${themeGet('colors.lightestGray')};
  background: ${themeGet('colors.white')};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${themeGet('colors.lightestGray')};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  }
`

Item.propTypes = {
  children: PropTypes.node.isRequired
}
