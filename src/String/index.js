import React from 'react'
import { withValue } from 'utils/withValue'
import { withValueAsChildren, withEditable } from 'utils/withEditable'
import { Input } from 'Input'
import { Text } from 'Text'

const StyledText = props => <Text lineHeight={3} {...props} />

export const String = withValue(
  'string',
  withEditable(Input, withValueAsChildren(StyledText))
)
