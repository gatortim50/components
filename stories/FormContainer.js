import React from 'react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { ObjectValue } from 'react-values'
import { Button } from 'Button'
import { ColumnLayout } from 'ColumnLayout'
import { Label } from 'Label'
import check from 'check-types'

const setValue = (set, state, index) => newValue => {
  state.fields[index].value = newValue
  return set(state)
}

export const stringValidator = (set, state, index) => newValue => {
  if (!newValue || newValue === '') {
    state.fields[index].errors =
      'Invalid empty string provided. Please fix it and try again.'
  } else {
    state.fields[index].errors = null
  }

  setValue(set, state, index)(newValue)
}

export const dateValidator = (set, state, index) => newValue => {
  if (check.not.date(newValue)) {
    state.fields[index].errors = 'Invalid date. Please select another date.'
  } else {
    state.fields[index].errors = null
  }

  setValue(set, state, index)(newValue)
}

export class FormContainer extends React.Component {

  _refs = []

  setRef = (index) => {
    if (this._refs.length < index - 1) {
      this._refs[index] = React.createRef()
    }
    return this._refs[index]
  }

  componentDidMount () {
    const { onMount } = this.props

    if (check.function(onMount)) {
      onMount(this)
    }
  }

  render () {
    const { fields } = this.props

    return (
      <ObjectValue
        defaultValue={{
          edit: false,
          fields
        }}
      >
        {({ value: state, set }) => (
          <Flex
            flexWrap='wrap'
            justifyContent='center'
            alignItems='flex-start'
            width='100%'
          >
            <Pane m={2} width='100%'>
              <Button onClick={() => set('edit', !state.edit)} variant='primary'>
                {state.edit ? 'View Mode' : 'Edit Mode'}
              </Button>
            </Pane>

            <ColumnLayout name={'form'} style={{ width: '100%' }}>
              {state.fields.map(
                ({ Component, onChange = setValue, ...rest }, index) => {
                  return (
                    <Component
                      ref={this.setRef}
                      key={`Component-${index}`}
                      readOnly={!state.edit}
                      onChange={onChange(set, state, index)}
                      {...rest}
                    />
                  )
                }
              )}
            </ColumnLayout>
          </Flex>
        )}
      </ObjectValue>
    )
  }

}
