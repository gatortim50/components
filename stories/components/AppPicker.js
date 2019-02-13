import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Heading } from 'Heading'
import { AppPicker } from 'AppPicker'
import { NumberValue } from 'react-values'

const apps = [
  {
    title: 'Axon',
    subtitle: 'Clinical Trials',
    abbr: 'ax'
  },
  {
    title: 'Cortex',
    subtitle: 'Core Settings',
    abbr: 'cx'
  },
  {
    title: 'Cerebrum',
    subtitle: 'Cerebrum',
    abbr: 'cb'
  },
  {
    title: 'Get apps...',
    subtitle: 'Get more',
    abbr: '+'
  }
]

const customOnClick = set => event => {
  const { index, close } = event.customData

  set(index)

  close()
  event.preventDefault()
}

storiesOf('AppPicker', module).add('Examples', () => (
  <Flex
    flexDirection='column '
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    width='800px'
  >
    <Heading as='h3' mt={5} mb={5}>
      Uncontrolled with default onClick
    </Heading>

    <AppPicker>
      {apps.map((app, index) => (
        <AppPicker.Item
          key={index}
          abbr={app.abbr}
          title={app.title}
          subtitle={app.subtitle}
        />
      ))}
    </AppPicker>

    <Heading as='h3' mt='100px' mb={5}>
      Controlled with custom onClick
    </Heading>

    <NumberValue defaultValue={0}>
      {({ value, set }) => (
        <AppPicker selectedIndex={value} width='275px'>
          {apps.map((app, index) => (
            <AppPicker.Item
              key={app.abbr}
              abbr={app.abbr}
              title={app.title}
              subtitle={app.subtitle}
              selected={value}
              onClick={customOnClick(set)}
            />
          ))}
        </AppPicker>
      )}
    </NumberValue>
  </Flex>
))
