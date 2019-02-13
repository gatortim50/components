import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Flex } from 'FlexBox'

storiesOf('Pane', module)
  .add('Examples', () => (
    <Flex justifyContent='center' alignItems='center'>
      <Pane
        width={100}
        height={32}
        borderRadius={16}
        border='1px solid'
        borderColor='lighterGray'
        bg='lightestGray'
        mr={2}
      />
      <Pane
        elevation={1}
        width={100}
        height={32}
        borderRadius={4}
        border='1px solid'
        borderColor='darkest'
        bg='white'
        mr={2}
      />
      <Pane
        size={100}
        bg='lightest'
        border='1px solid'
        borderColor='lighter'
        elevation={1}
        borderRadius={3}
        mr={2}
      />
      <Pane
        elevation={2}
        size={100}
        border='1px solid'
        borderColor='lightestGray'
        borderRadius={4}
        mr={2}
      />
      <Pane elevation={3} size={100} mr={2} bg='lightestGray' />
      <Pane elevation={4} size={100} mr={2} bg='darkestGray' borderRadius={4} />
      <Pane
        elevation={4}
        size={100}
        border='1px solid'
        borderColor='lightestGray'
        borderRadius={4}
      />
    </Flex>
  ))
  .add('Background', () => (
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
      <Flex mb={3}>
        <Pane size={100} bg='lightest' mr={2} />
        <Pane size={100} bg='lighter' mr={2} />
        <Pane size={100} bg='light' mr={2} />
        <Pane size={100} bg='dark' mr={2} />
        <Pane size={100} bg='darker' mr={2} />
        <Pane size={100} bg='darkest' />
      </Flex>

      <Flex mb={3}>
        <Pane size={100} bg='lightestGray' mr={2} />
        <Pane size={100} bg='lighterGray' mr={2} />
        <Pane size={100} bg='lightGray' mr={2} />
        <Pane size={100} bg='darkGray' mr={2} />
        <Pane size={100} bg='darkerGray' mr={2} />
        <Pane size={100} bg='darkestGray' />
      </Flex>

      <Flex mb={3}>
        <Pane size={100} bg='black' mr={2} />
        <Pane size={100} bg='white' mr={2} />
        <Pane size={100} bg='danger' />
      </Flex>
    </Flex>
  ))
  .add('Borders', () => (
    <Flex justifyContent='center' alignItems='center'>
      <Pane size={100} border='1px solid' borderColor='lightestGray' mr={2} />
      <Pane size={100} border='1px solid' borderColor='lighterGray' mr={2} />
      <Pane size={100} border='1px solid' borderColor='lightGray' mr={2} />
      <Pane size={100} border='1px solid' borderColor='darkGray' mr={2} />
      <Pane size={100} border='1px solid' borderColor='darkerGray' mr={2} />
      <Pane size={100} border='1px solid' borderColor='darkestGray' />
    </Flex>
  ))
  .add('Elevations', () => (
    <Flex justifyContent='center' alignItems='center'>
      <Pane elevation={0} size={100} mr={2} />
      <Pane elevation={1} size={100} mr={2} />
      <Pane elevation={2} size={100} mr={2} />
      <Pane elevation={3} size={100} mr={2} />
      <Pane elevation={4} size={100} />
    </Flex>
  ))
