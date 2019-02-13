import React from 'react'
import { storiesOf } from '@storybook/react'
import { Drawer } from 'Drawer'
import { Pane } from 'Pane'
import { Button } from 'Button'
import { BooleanValue } from 'react-values'

storiesOf('Drawer', module).add('Example', () => (
  <BooleanValue defaultValue={false}>
    {({ value: active, toggle }) => (
      <Pane p={4} position='relative'>
        <Button
          onClick={toggle}
          variant='primary'
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {active ? 'Hide' : 'Show'}
        </Button>

        <Drawer
          onOverlayClick={toggle}
          border='1px solid black'
          active={active}
          mt={6}
        >
          Interactive
        </Drawer>
      </Pane>
    )}
  </BooleanValue>
))
