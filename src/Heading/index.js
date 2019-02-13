import propTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'Text'

export const supportedElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const fontSize = ({ as, theme }) => {
  return {
    fontSize: theme.headingSizes[as[1] - 1]
  }
}

export const Heading = styled(Text)`
  ${fontSize};
`

Heading.propTypes = {
  as: propTypes.oneOf(supportedElements)
}

Heading.defaultProps = {
  as: 'h1',
  caps: false,
  fontFamily: 'sansSerif',
  fontWeight: 6,
  mt: 0,
  mb: 0
}
