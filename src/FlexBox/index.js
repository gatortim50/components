import styled from 'styled-components'
import { Pane } from 'Pane'

import {
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system'

export const Box = styled(Pane)`
  box-sizing: border-box;
  ${alignSelf};
  ${flex};
  ${order};
  max-width: 100%;
`

Box.displayName = 'Box'

Box.propTypes = {
  ...alignSelf.propTypes,
  ...flex.propTypes,
  ...order.propTypes
}

export const Flex = styled(Box)`
  display: flex;
  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}
