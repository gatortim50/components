import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Portal } from 'Portal'

storiesOf('Portal', module).add('Example', () => {
  return (
    <Portal>
      <Pane bg='lightestGray' p={3}>
        <p>Portal!</p>
        <code>
          If you inspect the DOM for this component you will see it is outside
          of the react root node.
        </code>
      </Pane>
    </Portal>
  )
})
