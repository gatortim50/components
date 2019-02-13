import styled from 'styled-components'
import {
  bgColor,
  borders,
  borderColor,
  borderRadius,
  display,
  height,
  position,
  size,
  space,
  style,
  width,
  zIndex
} from 'styled-system'

const elevation = style({
  prop: 'elevation',
  cssProperty: 'box-shadow',
  key: 'elevations'
})

export const Pane = styled.div`
  box-sizing: border-box;
  ${bgColor};
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${display};
  ${elevation};
  ${height};
  ${position};
  ${size};
  ${space};
  ${width};
  ${zIndex};
  max-width: 100%;
`

Pane.propTypes = {
  ...elevation.propTypes,
  ...bgColor.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...height.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes
}

Pane.defaultProps = {
  elevation: 0
}
