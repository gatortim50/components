import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Label } from 'Label'
import { defaultTheme } from 'defaultTheme'

const variants = [...Object.keys(defaultTheme.labels)]

const getLabels = ({ ...rest }) =>
  variants.map(variant => (
    <React.Fragment key={`${variant}`}>
      <Pane m={2}>
        <Label variant={variant} icon='hashtag' {...rest}>
          {variant}
        </Label>
      </Pane>
      <Pane m={2}>
        <Label variant={variant} {...rest}>
          {variant}
        </Label>
      </Pane>
    </React.Fragment>
  ))

storiesOf('Label', module).add('Examples', () => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    width='800px'
  >
    {getLabels({})}
  </Flex>
))
