import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Intrinsic } from 'Intrinsic'

const StyledIFrame = styled.iframe`
  width: 100%;
`

storiesOf('Bundle Statistics', module).add('Default', () => (
  <Intrinsic aspectRatio={850 / 1488}>
    <StyledIFrame src='/bundle-stats.html' />
  </Intrinsic>
))
