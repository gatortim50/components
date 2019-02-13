import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Flex } from 'FlexBox'
import { AnnotatedString } from 'AnnotatedString'

const LeftDecorator = props => (
  <AnnotatedString.Label {...props}>$</AnnotatedString.Label>
)
const RightDecorator = props => (
  <AnnotatedString.Label {...props}>.00</AnnotatedString.Label>
)

storiesOf('Annotated String', module).add('Example', () => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='flex-start'
    width='100%'
  >
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString value='Default' />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString readOnly value='Read Only' />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString
        LeftDecorator={LeftDecorator}
        value='Left Decorator'
        readOnly
      />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString
        RightDecorator={RightDecorator}
        value='Right Decorator'
        readOnly
      />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString
        LeftDecorator={LeftDecorator}
        RightDecorator={RightDecorator}
        value='Both Decorators'
        readOnly
      />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <AnnotatedString
        LeftDecorator={LeftDecorator}
        RightDecorator={RightDecorator}
        value='Edit w/Decorators'
        alwaysShowDecorators
      />
    </Pane>
  </Flex>
))
