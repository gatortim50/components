import React, { memo } from 'react'
import { Pane } from 'Pane'

export const ItemGroup = memo(({ children, withoutIcons = false }) => (
  <Pane>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        icon: withoutIcons ? null : child.props.icon || 'empty'
      })
    )}
  </Pane>
))
