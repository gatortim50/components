import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  display,
  textAlign,
  textColor,
  textStyle
} from 'styled-system'

const caps = props => {
  if (!props.caps) return null

  return { textTransform: 'uppercase' }
}

export const supportedElements = [
  'blockquote',
  'figcaption',
  'p',
  'pre',
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'cite',
  'code',
  'data',
  'dfn',
  'em',
  'i',
  'kbd',
  'mark',
  'q',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'tt',
  'u',
  'var',
  'label'
]

export const Text = styled.p`
  ${caps};
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${letterSpacing};
  ${space};
  ${display};
  ${textAlign};
  ${textColor};
  ${textStyle};
`

Text.propTypes = {
  as: propTypes.oneOf(supportedElements),
  caps: propTypes.bool,

  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textStyle.propTypes,
  ...textColor.propTypes,
  ...textAlign.propTypes
}

Text.defaultProps = {
  caps: false,
  textAlign: undefined,
  fontFamily: 'sansSerif',
  fontWeight: 4,
  mt: 0,
  mb: 0
}
