import React from 'react'
import PropTypes from 'prop-types'
import { withValue } from 'utils/withValue'
import { withEditable, withValueAsChildren } from 'utils/withEditable'
import { Text } from 'Text'
import { Input } from '../Input'

const TextAreComponent = props => {
  return <Input as='textarea' height={'auto'} {...props} />
}

TextAreComponent.propTypes = {
  rows: PropTypes.number
}

TextAreComponent.defaultProps = {
  rows: 4
}

export const TextArea = withValue(
  'string',
  withEditable(TextAreComponent, withValueAsChildren(Text))
)
