import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Heading, supportedElements } from 'Heading'

storiesOf('Heading', module).add('Examples', () => (
  <Pane>
    {supportedElements.map(level => (
      <Heading key={level} as={level}>
        {`I am a ${level} `}
      </Heading>
    ))}
  </Pane>
))
