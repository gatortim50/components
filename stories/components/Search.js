import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Flex } from 'FlexBox'
import { Search } from 'Search'
import { FormContainer } from '../FormContainer'

storiesOf('Search', module).add('Example', () => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='flex-start'
    width='100%'
  >
    <Pane bg='lightestGray' width='100%' p={3}>
      <FormContainer initialValue={{ search: 'Controlled Search text' }}>
        <Search name='search' />
      </FormContainer>
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <Search
        name='search'
        defaultValue='Read-Only Uncontrolled Search text'
        readOnly
      />
    </Pane>
    <Pane bg='lightestGray' width='100%' p={3}>
      <Search name='search' defaultValue='Uncontrolled Search text' />
    </Pane>
  </Flex>
))
