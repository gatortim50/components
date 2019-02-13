import React from 'react'
import { storiesOf } from '@storybook/react'
import { AppBar } from 'AppBar'
import { Pane } from 'Pane'

storiesOf('AppBar', module).add('Examples', () => (
  <Pane p={4}>
    <AppBar>This is the app bar</AppBar>
  </Pane>
))
