import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { BooleanValue } from 'react-values'
import { Button } from 'Button'
import { Paging } from 'Paging'

storiesOf('Paging', module).add('Example', () => (
  <BooleanValue defaultValue={false}>
    {({ value: edit, toggle }) => (
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        alignItems='flex-start'
        width='100%'
      >
        <Pane m={2} width='100%'>
          <Button onClick={toggle} variant='primary'>
            {edit ? 'View Mode' : 'Edit Mode'}
          </Button>
        </Pane>

        <Pane m={2} width='100%'>
          <Paging
            name='example'
            defaultValue={{ pageNumber: 1, itemsPerPage: 100 }}
            availableItemsPerPage={[5, 20, 50, 100]}
            totalItems={450}
            totalPageItems={50}
            onChange={({ pageNumber, itemsPerPage }) =>
              console.log(
                `Paging Change - page: ${pageNumber}, items: ${itemsPerPage}`
              )
            }
            hasNext
          />
        </Pane>

        <Pane m={2} width='100%'>
          <Paging
            name='example-without-next'
            defaultValue={{ pageNumber: 1, itemsPerPage: 100 }}
            availableItemsPerPage={[5, 20, 50, 100]}
            totalItems={450}
            totalPageItems={50}
            onChange={({ pageNumber, itemsPerPage }) =>
              console.log(
                `Paging Change - page: ${pageNumber}, items: ${itemsPerPage}`
              )
            }
          />
        </Pane>

        <Pane m={2} width='100%'>
          <Paging
            name='example-without-next'
            defaultValue={{ pageNumber: 1, itemsPerPage: 100 }}
            availableItemsPerPage={[5, 20, 50, 100]}
            totalPageItems={50}
            onChange={({ pageNumber, itemsPerPage }) =>
              console.log(
                `Paging Change - page: ${pageNumber}, items: ${itemsPerPage}`
              )
            }
            hasNext
          />
        </Pane>
      </Flex>
    )}
  </BooleanValue>
))
