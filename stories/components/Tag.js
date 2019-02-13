import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Tag } from 'Tag'
import { defaultTheme } from 'defaultTheme'

const variants = [undefined, ...Object.keys(defaultTheme.tags)]

const getTags = ({ showText, ...rest }) =>
  variants.map(variant => (
    <React.Fragment key={`${variant}`}>
      <Pane m={2}>
        <Tag {...rest} variant={variant}>
          {showText && variant}
        </Tag>
      </Pane>
    </React.Fragment>
  ))

storiesOf('Tag', module)
  .add('Variants', () => (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      width='800px'
    >
      {getTags({ showText: true })}
    </Flex>
  ))
  .add('Variants with Custom width', () => (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      width='500px'
    >
      {getTags({ width: 250, showText: true })}
    </Flex>
  ))
