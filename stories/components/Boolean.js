import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Label } from 'Label'
import { BooleanValue } from 'react-values'
import { Button } from 'Button'
import { Boolean, BooleanArray } from 'Boolean'

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`

storiesOf('Boolean', module).add('Variants', () => (
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
          <Boolean
            label={<Label icon='hashtag'>Boolean Form Component</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={false}
          >
            Boolean Label
          </Boolean>
        </Pane>

        <Pane m={2} width='100%'>
          <Boolean
            label={<Label icon='hashtag'>Boolean Form Component</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={false}
            variant='minimal'
            checkboxVariant='square'
          />
        </Pane>

        <Pane m={2} width='100%'>
          <BooleanArray
            name='1st-bool-array'
            label={<Label icon='hashtag'>Boolean Array Component</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={[true]}
          >
            <BooleanArray.Item defaultValue>one</BooleanArray.Item>
            <BooleanArray.Item defaultValue={false}>
              second one
            </BooleanArray.Item>
            <BooleanArray.Item defaultValue>the third one</BooleanArray.Item>
          </BooleanArray>
        </Pane>

        <Pane m={2} width='100%'>
          <BooleanArray
            name='2nd-bool-array'
            label={
              <Label icon='hashtag'>Capsule Boolean Array Component</Label>
            }
            readOnly={!edit}
            description={description}
            defaultValue={[true, false, true]}
            variant='capsule'
          >
            <BooleanArray.Item defaultValue>one</BooleanArray.Item>
            <BooleanArray.Item defaultValue={false}>
              second one
            </BooleanArray.Item>
            <BooleanArray.Item defaultValue>the third one</BooleanArray.Item>
          </BooleanArray>
        </Pane>

        <Pane m={2} width='100%'>
          <BooleanArray
            name='3nd-bool-array'
            label={
              <Label icon='hashtag'>Minimal Boolean Array Component</Label>
            }
            readOnly={!edit}
            description={description}
            defaultValue={[true, true, false]}
            variant='minimal'
          >
            <BooleanArray.Item checkboxVariant='square' defaultValue>
              one
            </BooleanArray.Item>
            <BooleanArray.Item checkboxVariant='square' defaultValue={false}>
              two
            </BooleanArray.Item>
            <BooleanArray.Item checkboxVariant='square' defaultValue>
              three
            </BooleanArray.Item>
          </BooleanArray>
        </Pane>
      </Flex>
    )}
  </BooleanValue>
))
