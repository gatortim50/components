import React from 'react'
import { storiesOf } from '@storybook/react'
import { Intrinsic } from 'Intrinsic'
import { Pane } from 'Pane'
import { themeGet } from 'defaultTheme'
import styled from 'styled-components'
import { Text } from 'Text'

const StyledIntrinsic = styled(Intrinsic)`
  font-size: 38px;
  border: 4px solid #000;
  margin-bottom: 5px;
  .content {
    flex-direction: row;
    align-content: center;
    align-items: center;
  }
`

storiesOf('Intrinsic', module).add('Examples', () => (
  <Pane p={4}>
    {Object.entries({
      '3 by 2': 2 / 3,
      '4 by 3': 3 / 4,
      '16 by 9': 9 / 16,
      '21 by 9': 9 / 21,
      '3 by 1': 1 / 3
    }).map(([key, value]) => (
      <StyledIntrinsic key={key} aspectRatio={value}>
        <Text textAlign='center' style={{ width: '100%' }}>
          My aspect ratio is <b>{key}</b>.
        </Text>
      </StyledIntrinsic>
    ))}
  </Pane>
))
