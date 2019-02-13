import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Control } from 'Control'
import { defaultTheme } from 'defaultTheme'

const variants = [undefined, ...Object.keys(defaultTheme.buttons)]

const getControl = ({ ...rest }) =>
  variants.map(variant => (
    <React.Fragment key={`${variant}`}>
      <Pane m={2}>
        <Control />
      </Pane>
      <Pane m={2}>
        <Control variant={variant} {...rest}>
          <Control.Item icon='hashtag' />
          <Control.Item icon='poll' />
          <Control.Item icon='round_checked' />
        </Control>
      </Pane>
      <Pane m={2}>
        <Control variant={variant} {...rest}>
          <Control.Item label='left' icon='hashtag' />
          <Control.Item label='middle' icon='poll' />
          <Control.Item label='right' icon='round_checked' />
        </Control>
      </Pane>
      <Pane m={2}>
        <Control variant={variant} {...rest}>
          <Control.Item icon='hashtag' />
          <Control.Item icon='poll' />
          <Control.Divider />
          <Control.Item icon='round_checked' />
        </Control>
      </Pane>
      <Pane m={2}>
        <Control variant={variant} {...rest}>
          <Control.Item icon='hashtag' />
          <Control.Item icon='poll' />
          <Control.Divider />
          <Control.Item icon='round_checked' variant='dangerous' />
        </Control>
      </Pane>
    </React.Fragment>
  ))

storiesOf('Control', module).add('Control styles', () => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    width='800px'
  >
    {getControl({})}
  </Flex>
))
