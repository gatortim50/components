import React, { memo } from 'react'
import { Pane } from 'Pane'

const DividerComponent = () => (
  <Pane borderLeft='1px solid' borderColor='lighterGray' />
)

export const Divider = memo(DividerComponent)
