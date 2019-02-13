import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'Button'
import { themeGet } from 'defaultTheme'
import { space } from 'styled-system'

export const AppPickerButton = styled(Button).attrs({
  // Overrides the `buttons` theme key for fetching variants
  themeKey: 'apps'
})`
  ${space};
  justify-content: space-between;
  white-space: nowrap;
  height: ${themeGet('space.7')};
`

AppPickerButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
}

AppPickerButton.defaultProps = {
  variant: 'default'
}
