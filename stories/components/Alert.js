import React from 'react'
import { storiesOf } from '@storybook/react'
import { Alert } from 'Alert'
import { Pane } from 'Pane'

storiesOf('Alert', module).add('Examples', () => (
  <Pane p={4}>
    <Pane mb={2}>
      <Alert message='Sample default message.' />
    </Pane>

    <Pane mb={2}>
      <Alert variant='success' message='Sample success message.' />
    </Pane>

    <Pane mb={2}>
      <Alert variant='danger' message='Sample error message.' />
    </Pane>

    <Pane mb={2}>
      <Alert
        message='Sample default message with no action.'
        hasAction={false}
      />
    </Pane>
  </Pane>
))
