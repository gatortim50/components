import React from 'react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'

const defaultOnClick = event => {
  event.customData.close()
  event.preventDefault()
}

const onClick = (child, index, rest) => {
  const onClick = child.props.onClick || defaultOnClick

  return event => {
    event.customData = {
      ...child.props,
      ...rest,
      index
    }

    onClick(event)
  }
}

export const Content = ({ children, selectedIndex, ...rest }) => (
  <Pane elevation={3} borderRadius='6px' bg='white'>
    <Flex p={1} flexWrap='wrap' width='376px'>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          selected: selectedIndex === index,
          onClick: onClick(child, index, rest)
        })
      )}
    </Flex>
  </Pane>
)
