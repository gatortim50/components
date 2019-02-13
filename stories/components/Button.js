import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Button } from 'Button'
import { defaultTheme } from 'defaultTheme'

const variants = [undefined, ...Object.keys(defaultTheme.buttons)]

const getButtons = ({ showText, ...rest }) =>
  variants.map(variant => (
    <React.Fragment key={`${variant}`}>
      <Pane m={2}>
        <Button {...rest} variant={variant}>
          {showText && variant}
        </Button>
      </Pane>
      <Pane m={2}>
        <Button {...rest} variant={variant} iconBefore='hashtag'>
          {showText && variant}
        </Button>
      </Pane>
      <Pane m={2}>
        <Button {...rest} variant={variant} iconAfter='hashtag'>
          {showText && variant}
        </Button>
      </Pane>
      <Pane m={2}>
        <Button
          {...rest}
          variant={variant}
          iconBefore='hashtag'
          iconAfter='hashtag'
        >
          {showText && variant}
        </Button>
      </Pane>
      <Pane m={2}>
        <Button
          {...rest}
          variant={variant}
          iconBefore='hashtag'
          iconAfter='hashtag'
          disabled
        >
          {showText && variant}
        </Button>
      </Pane>
    </React.Fragment>
  ))

storiesOf('Button', module)
  .add('Icon button styles', () => (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      width='800px'
    >
      {getButtons({})}
    </Flex>
  ))
  .add('Text button styles', () => (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      width='800px'
    >
      {getButtons({ showText: true })}
    </Flex>
  ))
  .add('Custom width', () => (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      width='800px'
    >
      {getButtons({ width: 250, showText: true })}
    </Flex>
  ))
