import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Text } from 'Text'

const linkVariant = variant({
  key: 'links'
})

const StyledLink = styled(Text).attrs({
  as: 'a'
})`
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  ${linkVariant}
`

export const Link = ({ displayText, href, ...rest }) => (
  <StyledLink title={displayText || href} {...rest} href={href}>
    {displayText || href}
  </StyledLink>
)

Link.propTypes = {
  displayText: PropTypes.string,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string
}

Link.defaultProps = {
  variant: 'default',
  displayText: ''
}
