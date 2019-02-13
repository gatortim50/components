import React from 'react'
import check from 'check-types'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Label } from 'Label'
import { ObjectValue } from 'react-values'
import { Button } from 'Button'
import { ColumnLayout } from 'ColumnLayout'
import { Date as DateComponent } from 'Date'

const exampleFields = {
  edit: false,
  fields: [{ value: new Date() }, { value: new Date() }, { value: new Date() }]
}

const onChange = (set, index, state) => value => {
  const nextState = Object.assign({}, state)
  nextState.fields[index].value = value
  set(nextState)
}

storiesOf('Date', module).add('Variants', () => (
  <ObjectValue defaultValue={exampleFields}>
    {({ value: state, set }) => {
      const getValue = index => {
        try {
          return state.fields[index].value
        } catch (ex) {
          return undefined
        }
      }
      return (
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
              <DateComponent
                label={<Label>Date with time</Label>}
                includeTime
                description='Date picker and time picker.'
                name='date1'
                timeMask={false}
                readOnly={!state.edit}
                value={getValue(0)}
                onChange={onChange(set, 0, state)}
              />

              <DateComponent
                label={<Label>Date only</Label>}
                description='Date picker without time picker'
                name='date2'
                readOnly={!state.edit}
                value={getValue(1)}
                onChange={onChange(set, 1, state)}
              />

              <DateComponent
                label={<Label>Custom Formatting</Label>}
                includeTime
                dateFormatEdit='MMM Mo, yyyy'
                timeFormatView={` @ h 'o''clock'`}
                timeFormatEdit={` h "o'clock"`}
                dateMask={value => {
                  const month = [
                    /[a-z]|[A-Z]/,
                    /[a-z]|[A-Z]/,
                    /[a-z]|[A-Z]/,
                    ' '
                  ]
                  const year = [',', ' ', /\d/, /\d/, /\d/, /\d/]
                  let day = [/\d/, /[a-z]|[A-Z]/, /[a-z]|[A-Z]/]

                  if (check.nonEmptyString(value)) {
                    const parts = value.split(' ')

                    // allows day to be any number of characters eg: 1st, 13th
                    if (parts.length > 1) {
                      day = [...parts[1]].map(() => /\d|[a-z]|[A-Z]/)
                      day.shift() // removes comma
                    }
                  }

                  return [...month, ...day, ...year]
                }}
                timeMask={value => {
                  let number = [/\d/]

                  const oClock = [' ', 'o', "'", 'c', 'l', 'o', 'c', 'k']

                  if (check.nonEmptyString(value)) {
                    const parts = value.split(' ')

                    // allows the time to be one or two characters eg: 12 o'clock or 1 o'clock
                    if (parts.length > 1) {
                      number = [...parts[1].slice(0, 2)].map(
                        () => /\d|[a-z]|[A-Z]/
                      )
                    }
                  }

                  return [' ', ...number, ...oClock]
                }}
                description='Date picker with custom formatting applied.'
                name='date3'
                readOnly={!state.edit}
                value={getValue(2)}
                onChange={onChange(set, 2, state)}
              />
            </ColumnLayout>
          </Pane>
        </Flex>
      )
    }}
  </ObjectValue>
))
