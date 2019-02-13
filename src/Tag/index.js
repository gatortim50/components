import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant, width } from 'styled-system'
import { themeGet } from 'defaultTheme'

const tagStyle = variant({
  key: 'tags'
})

export const Tag = styled.button`
  box-sizing: border-box;
  height: ${themeGet('space.3')};
  min-width: ${themeGet('space.3')};
  font-size: ${themeGet('fontSizes.0')};
  letter-spacing: ${themeGet('letterSpacings.1')};
  line-height: ${themeGet('lineHeights.0')};
  font-weight: ${themeGet('fontWeights.4')};
  text-transform: uppercase;
  padding: 0;
  padding-right: ${themeGet('space.4')};
  padding-left: ${themeGet('space.4')};
  border: none;
  border-radius: calc(${themeGet('space.4')} / 2);
  ${tagStyle};
  ${width};

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${themeGet('colors.light')};
  }
`

Tag.propTypes = {
  ...tagStyle.propTypes,
  ...width.propTypes,
  children: PropTypes.node
}

Tag.defaultProps = {
  variant: 'default',
  width: 1
}
