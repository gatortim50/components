import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Text, supportedElements } from 'Text'

storiesOf('Text', module).add('Examples', () => (
  <Fragment>
    {supportedElements.sort().map(element => (
      <Pane key={element} mb={1}>
        <Text as={element}>
          &lt;
          {element}
          &gt; tag
        </Text>
      </Pane>
    ))}
  </Fragment>
))
