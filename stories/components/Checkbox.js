import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { BooleanValue } from 'react-values'
import { Checkbox } from 'Checkbox'
import { Heading } from 'Heading'
import { Pane } from 'Pane'

storiesOf('Checkbox', module)
  .add('Variants', () => (
    <Fragment>
      <Pane>
        <BooleanValue>
          {({ value, toggle }) => (
            <Checkbox onClick={toggle} checked={value}>
              Checkbox label
            </Checkbox>
          )}
        </BooleanValue>
      </Pane>
      <Pane>
        <BooleanValue>
          {({ value, toggle }) => (
            <Checkbox onClick={toggle} checked={value} variant='square'>
              Checkbox label
            </Checkbox>
          )}
        </BooleanValue>
      </Pane>
    </Fragment>
  ))
  .add('Examples', () => (
    <Fragment>
      <Pane mb={3}>
        <Heading as='h3' mb={1}>
          Uncontrolled
        </Heading>

        <Pane>
          <Checkbox>Checkbox label</Checkbox>
        </Pane>

        <Pane>
          <Checkbox checked>Checkbox label</Checkbox>
        </Pane>

        <Pane>
          <Checkbox checked color='darkest'>
            Checkbox label
          </Checkbox>
        </Pane>

        <Pane>
          <Checkbox checked color='danger'>
            Checkbox label
          </Checkbox>
        </Pane>
      </Pane>

      <Heading as='h3' mb={1}>
        Controlled
      </Heading>

      <Pane>
        <BooleanValue defaultValue>
          {({ value, toggle }) => (
            <Checkbox onClick={toggle} checked={value} size={2} color='gray'>
              Checkbox label
            </Checkbox>
          )}
        </BooleanValue>
      </Pane>

      <Pane>
        <BooleanValue>
          {({ value, toggle }) => (
            <Checkbox onClick={toggle} checked={value}>
              Checkbox label
            </Checkbox>
          )}
        </BooleanValue>
      </Pane>

      <Pane>
        <BooleanValue>
          {({ value, toggle }) => (
            <Checkbox onClick={toggle} checked={value} size={4}>
              Checkbox label
            </Checkbox>
          )}
        </BooleanValue>
      </Pane>
    </Fragment>
  ))
