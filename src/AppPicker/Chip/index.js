import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize, fontWeight, lineHeight } from 'styled-system'
import { Pane } from 'Pane'
import { themeGet } from 'defaultTheme'

// Application Chip Box with the Abbreviation
export const Chip = styled(Pane)`
  display: flex;
  height: ${themeGet('space.6')};
  width: ${themeGet('space.6')};
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
`

Chip.propTypes = {
  children: PropTypes.node.isRequired
}

Chip.defaultProps = {
  className: 'abbr',
  elevation: 1,
  borderRadius: '6px',
  fontSize: 4,
  fontWeight: 5,
  lineHeight: 3
}
