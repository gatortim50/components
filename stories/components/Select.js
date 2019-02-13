import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Label } from 'Label'
import { BooleanValue } from 'react-values'
import { Button } from 'Button'
import { Select } from 'Select'

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`

const items = [
  { icon: 'hashtag', id: 'one', label: 'First Item' },
  { icon: 'hashtag', id: 'two', label: 'Second Item' },
  { icon: 'hashtag', id: 'three', label: 'Third Item' },
  { icon: 'hashtag', id: 'four', label: 'Fourth Item' },
  { icon: 'hashtag', id: 'five', label: 'Fifth Item' }
]

const Items = () =>
  items.map(({ icon, id, label }) => (
    <Select.Item icon={icon} value={id} key={id}>
      {label}
    </Select.Item>
  ))

/* eslint-disable react/display-name */
const renderItems = options => set => (
  <Select.Item icon='hashtag' value=''>
    {set.size} of {items.length} Items Selected
  </Select.Item>
)
/* eslint-enable react/display-name */

storiesOf('Select', module).add('Variants', () => (
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
          <Select
            name='select-1'
            label={<Label icon='hashtag'>Single Select</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three'])}
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-2'
            label={
              <Label icon='hashtag'>Single Select without deselection</Label>
            }
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['one'])}
            allowDeselection={false}
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-3'
            label={<Label icon='hashtag'>Multiple Select</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three'])}
            multiple
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-4'
            label={
              <Label icon='hashtag'>Multiple Select Before Checkbox</Label>
            }
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three'])}
            multiple
            checkboxPosition='before'
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-5'
            label={
              <Label icon='hashtag'>Multiple Select Without Checkbox</Label>
            }
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three', 'two', 'one'])}
            multiple
            checkboxPosition='none'
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-6'
            label={<Label icon='hashtag'>Multiple, Max 3</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three'])}
            multiple
            maxItems={3}
          >
            {Items()}
          </Select>
        </Pane>

        <Pane m={2} width='100%'>
          <Select
            name='select-7'
            label={<Label icon='hashtag'>Custom renderSelected</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={new Set(['three', 'two', 'one'])}
            renderSelected={renderItems}
            multiple
          >
            {Items()}
          </Select>
        </Pane>
        <Pane m={2} width='100%'>
          <Select
            name='select-8'
            label={<Label icon='hashtag'>Custom renderSelectedOptions</Label>}
            readOnly={!edit}
            description={description}
            defaultValue={new Set()}
            selectedItemCutoff={0}
            selectedItemEmptyText='Nothing to see here'
            multiple
          >
            {Items()}
          </Select>
        </Pane>
      </Flex>
    )}
  </BooleanValue>
))
