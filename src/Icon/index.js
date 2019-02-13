import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import check from 'check-types'
import { space, style, px } from 'styled-system'
import { getIcon, propTypes as iconPropTypes } from './icons'
import { themeGet } from '../defaultTheme'

/**
 * Renders the icons provided with this library
 *
 * @param icon {string}
 * @param rest
 */
export const DefaultIconStrategy = ({ icon, ...rest }) => {
  const Component = getIcon(icon)

  if (!Component) return null

  return <Svg as={Component} {...rest} />
}

DefaultIconStrategy.propTypes = {
  ...iconPropTypes
}

export const IconContext = React.createContext({
  iconStrategy: DefaultIconStrategy
})

const height = style({
  prop: 'size',
  key: 'iconSizes',
  cssProperty: 'height',
  transformValue: px
})

const width = style({
  prop: 'size',
  key: 'iconSizes',
  cssProperty: 'width',
  transformValue: px
})

const fill = style({
  prop: 'color',
  key: 'colors',
  cssProperty: 'fill'
})

const hover = ({ onClick }) =>
  check.function(onClick) && '&:hover { cursor: pointer; }'

export const Svg = styled.svg`
  ${hover};
  ${width};
  ${height};
  ${fill};
  ${space};
  ${hover};
  & * {
    ${fill};
  }
`

export const Icon = props => {
  return (
    <IconContext.Consumer>
      {({ iconStrategy }) => iconStrategy(props)}
    </IconContext.Consumer>
  )
}

Icon.propTypes = {
  ...fill.propTypes,
  ...height.propTypes,
  ...width.propTypes
}

Icon.defaultProps = {
  color: 'light',
  size: 3,
  icon: null
}
