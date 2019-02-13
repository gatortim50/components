import React from 'react'
import { Input } from 'Input'
import { ClearIcon } from 'Input/ClearIcon'
import { withValue, ValueContext } from 'utils/withValue'
import { withEditable } from 'utils/withEditable'
import { InputIcon } from 'Input/Icon'

const LeftDecorator = props => (
  <InputIcon {...props} icon='search' size={2} color='lighterGray' />
)

const RightDecorator = props => (
  <ValueContext.Consumer>
    {({ clear }) => <ClearIcon {...props} onClick={clear} />}
  </ValueContext.Consumer>
)

const SearchComponent = props => <Input {...props} />

SearchComponent.propTypes = {
  ...Input.propTypes
}

SearchComponent.defaultProps = {
  LeftDecorator,
  RightDecorator,
  variant: 'search',
  placeholder: 'Search'
}

export const Search = withValue('string', withEditable(SearchComponent))
