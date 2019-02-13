import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Card } from 'Card'
import { Flex } from 'FlexBox'
import { Label } from 'Label'
import { Button } from 'Button'

const StyledFlex = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'dark',
  height: '100%',
  width: '100%',
  p: 5
})``

storiesOf('Card', module).add('Examples', () => (
  <React.Fragment>
    <StyledFlex>
      <Card>Default Card</Card>
    </StyledFlex>
    <StyledFlex>
      <Card title='The Primary Card Title'>Primary Card</Card>
    </StyledFlex>
    <StyledFlex>
      <Card title='The Secondary Card Title' secondary>
        Secondary Card
      </Card>
    </StyledFlex>
    <StyledFlex>
      <Card title={<Label icon='hashtag'>The Custom Title</Label>}>
        With Custom Title
      </Card>
    </StyledFlex>
    <StyledFlex>
      <Card
        title='A Title'
        actions={[
          <Button key='1' variant='secondary'>
            One
          </Button>,
          <Button key='2' variant='success'>
            Two
          </Button>,
          <Button key='3' variant='primary'>
            Three
          </Button>
        ]}
      >
        Card content w/Actions
      </Card>
    </StyledFlex>
    <StyledFlex>
      <Card
        title='Super long label to show behavior of actions breaking'
        actions={[
          <Button key='1'>One</Button>,
          <Button key='2'>Two</Button>,
          <Button key='3'>Three</Button>
        ]}
      >
        Card content and stuff
      </Card>
    </StyledFlex>
  </React.Fragment>
))
