import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Search,
  AnnotatedStringField as AnnotatedString,
  BooleanField as Boolean,
  BooleanArrayField as BooleanArray,
  DateField as DateComponent,
  StringField as String,
  TextAreaField as TextArea
} from '/'

import { FormContainer, stringValidator, dateValidator } from '../FormContainer'

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`

const RightDecorator = props => (
  <AnnotatedString.Label {...props}>Unit</AnnotatedString.Label>
)

storiesOf('Layout Fields', module).add('Examples', () => (
  <FormContainer
    fields={[
      {
        Component: String,
        label: 'String',
        description,
        value: 'Sample value',
        onChange: stringValidator,
        weight: 2.0
      },
      {
        Component: String,
        labelIcon: 'hashtag',
        label: 'String w/ input mask',
        description: 'Phone number input mask',
        value: '',
        onChange: stringValidator,
        weight: 2.0,
        mask: [
          '(',
          /[1-9]/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ],
        placeholder: 'Enter your phone number'
      },
      {
        Component: Search,
        label: '',
        description,
        value: 'Sample value',
        onChange: stringValidator,
        weight: 2.0
      },
      {
        Component: TextArea,
        label: 'TextArea',
        description,
        value: description,
        onChange: stringValidator,
        weight: 2.0
      },
      {
        Component: AnnotatedString,
        label: 'Annotated String',
        description,
        value: '88',
        onChange: stringValidator,
        weight: 2.0,
        RightDecorator
      },
      {
        Component: DateComponent,
        name: 'date-1',
        label: 'Date',
        description,
        value: new Date()
      },
      {
        Component: Boolean,
        label: 'Boolean',
        children: 'Checkbox test',
        description,
        value: false
      },
      {
        Component: DateComponent,
        label: 'Date',
        description,
        name: 'DateComponent',
        value: new Date(),
        onChange: dateValidator
      },
      {
        Component: BooleanArray,
        label: 'Boolean Array',
        children: [
          <BooleanArray.Item key='bool1-1' value>
            one
          </BooleanArray.Item>,
          <BooleanArray.Item key='bool1-2' value={false}>
            second one
          </BooleanArray.Item>,
          <BooleanArray.Item key='bool1-3' value>
            the third one
          </BooleanArray.Item>
        ],
        description,
        value: [true],
        weight: 1.0,
        name: 'bool-array'
      },
      {
        Component: BooleanArray,
        label: 'Capsule Boolean',
        children: [
          <BooleanArray.Item key='bool2-1' value>
            one
          </BooleanArray.Item>,
          <BooleanArray.Item key='bool2-2' value={false}>
            second one
          </BooleanArray.Item>,
          <BooleanArray.Item key='bool2-3' value>
            the third one
          </BooleanArray.Item>
        ],
        description,
        value: [true, false, true],
        variant: 'capsule',
        name: 'bool-capsule-array'
      }
    ]}
  />
))
