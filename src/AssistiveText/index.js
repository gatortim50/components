import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'Text'
import { variant } from 'defaultTheme'

const assistiveStyle = variant({
  key: 'assistiveTexts'
})

export const AssistiveText = styled(Text).attrs({
  as: 'div'
})`
  display: block;
  padding: 0;
  margin-top: 8px;
  margin-bottom: 4px;
  ${assistiveStyle};
`

AssistiveText.propTypes = {
  children: PropTypes.node.isRequired,
  focused: PropTypes.bool,
  hasErrors: PropTypes.bool,
  ...assistiveStyle.propTypes
}

AssistiveText.defaultProps = {
  variant: 'default',
  fontFamily: 'sans-serif',
  color: 'darkerGray',
  fontSize: 0,
  lineHeight: 0,
  fontWeight: 4,
  letterSpacing: 1,
  focused: false,
  hasErrors: false
}
