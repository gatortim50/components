import React from 'react'
import { storiesOf } from '@storybook/react'
import { ObjectValue } from 'react-values'

import {
  ColumnLayout,
  Flex,
  Document,
  DocumentArray,
  Button,
  Label,
  Pane,
  BooleanField as Boolean,
  DateField as Date,
  StringField as String,
  TextAreaField as TextArea
} from '/'

import { stringValidator } from '../FormContainer'

const exampleFields = {
  edit: false,
  fields: [
    { value: 'Lorem Ipsum 0' },
    { value: 'Lorem Ipsum 1' },
    { value: 'Lorem Ipsum 2' }
  ]
}

storiesOf('Document', module).add('Example', () => (
  <ObjectValue defaultValue={exampleFields}>
    {({ value: state, set }) => (
      <Flex
        justifyContent='center'
        alignItems='center'
        width='100%'
        flexDirection='column'
      >
        <Pane m={2} width='100%'>
          <Button onClick={() => set('edit', !state.edit)} variant='primary'>
            {state.edit ? 'View Mode' : 'Edit Mode'}
          </Button>
        </Pane>

        <Pane m={5} width='70%'>
          <ColumnLayout name='form' columns={2} gutter={2} columnGap={4}>
            <Document
              readOnly={!state.edit}
              label={<Label icon='document'>Document</Label>}
              description='Document description'
              // Custom elevation
              elevation={3}
            >
              <Boolean
                readOnly={!state.edit}
                description='Boolean Description'
                label={<Label icon='hashtag'>Boolean</Label>}
              >
                Public
              </Boolean>

              <Date
                name='date-1'
                readOnly={!state.edit}
                description='Date Description'
                label={<Label icon='hashtag'>Date</Label>}
              />

              <Boolean
                readOnly={!state.edit}
                description='Boolean Description'
                label={<Label icon='hashtag'>Boolean</Label>}
              >
                Public
              </Boolean>

              <String
                readOnly={!state.edit}
                value={state.fields[0].value}
                description='String Description'
                label={<Label icon='hashtag'>String</Label>}
                errors={state.fields[0].errors}
                onChange={stringValidator(set, state, 0)}
              />
            </Document>

            <DocumentArray
              name='doc-array'
              readOnly={!state.edit}
              label={<Label icon='document'>Document [Array]</Label>}
              description='Document Array description'
            >
              <DocumentArray.Item
                readOnly={!state.edit}
                label={<Label icon='document'>Document</Label>}
                description='Document description'
              >
                <Boolean
                  readOnly={!state.edit}
                  description='Boolean Description'
                  label={<Label icon='hashtag'>Boolean</Label>}
                >
                  Public
                </Boolean>

                <Date
                  name='date-2'
                  readOnly={!state.edit}
                  description='Date Description'
                  label={<Label icon='hashtag'>Date</Label>}
                />

                <Boolean
                  readOnly={!state.edit}
                  description='Boolean Description'
                  label={<Label icon='hashtag'>Boolean</Label>}
                >
                  Public
                </Boolean>

                <String
                  readOnly={!state.edit}
                  value={state.fields[1].value}
                  description='String Description'
                  label={<Label icon='hashtag'>String</Label>}
                  errors={state.fields[1].errors}
                  onChange={stringValidator(set, state, 1)}
                />
              </DocumentArray.Item>

              <DocumentArray.Item
                readOnly={!state.edit}
                label={<Label icon='document'>Document</Label>}
                description='Document description'
              >
                <Boolean
                  readOnly={!state.edit}
                  description='Boolean Description'
                  label={<Label icon='hashtag'>Boolean</Label>}
                >
                  Public
                </Boolean>

                <TextArea
                  readOnly={!state.edit}
                  value={state.fields[2].value}
                  description='TextArea Description'
                  label={<Label icon='hashtag'>TextArea</Label>}
                  errors={state.fields[2].errors}
                  onChange={stringValidator(set, state, 2)}
                />

                <Date
                  name='date-3'
                  readOnly={!state.edit}
                  description='Date Description'
                  label={<Label icon='hashtag'>Date</Label>}
                />
              </DocumentArray.Item>
            </DocumentArray>
          </ColumnLayout>
        </Pane>
      </Flex>
    )}
  </ObjectValue>
))
