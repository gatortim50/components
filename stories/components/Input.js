import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Flex } from 'FlexBox'
import { Input } from 'Input'

storiesOf('Input', module).add('Example', () => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='flex-start'
    width='100%'
  >
    <Pane bg='lightestGray' width='100%' p={3}>
      <Input placeholder='Placeholder text...' name='input' defaultValue={''} />
    </Pane>
  </Flex>
))
