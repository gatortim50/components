import React from 'react'
import styled from 'styled-components'
import { buttonStyle } from 'styled-system'
import { themeGet } from 'defaultTheme'
import { Flex } from 'FlexBox'
import { Item } from './Item'
import { Divider } from './Divider'

const Container = styled(Flex)`
  border-radius: 6px;
  padding-left: ${themeGet('space.1')};
  padding-right: ${themeGet('space.1')};
  margin-top: 2px;
  margin-bottom: 6px;
  ${buttonStyle};
`

export const Control = ({ children, variant, ...etc }) => (
  <Container role='toolbar' variant={variant} {...etc}>
    {React.Children.map(children, (element, index) => {
      return React.cloneElement(element, {
        variant: element.props.variant || variant
      })
    })}
  </Container>
)

Control.defaultProps = {
  variant: 'gray'
}

Control.Divider = Divider
Control.Item = Item
