import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'Text'
import { themeGet } from 'defaultTheme'
import { Boolean } from 'Boolean'
import { Button } from 'Button'
import { Flex } from 'FlexBox'

const buttonColor = props =>
  props.sortable && props.sorted
    ? themeGet('colors.black')(props)
    : themeGet('colors.darkerGray')(props)

const StyledButton = styled(Button).attrs(props => ({
  fgColor: buttonColor(props)
}))`
  color: ${buttonColor};
  justify-content: flex-start;
  width: 100%;
  text-transform: none;
  font-size: ${themeGet('fontSizes.0')};
  margin: 0;
  padding: 0;
`

export const BaseHeader = styled(Text).attrs(({ active }) => ({
  as: 'th',
  fontSize: 0,
  color: active ? 'black' : 'darkGray',
  textAlign: 'left'
}))``

const sortedIcon = {
  asc: 'arrow_up',
  desc: 'arrow_down'
}

const Checkbox = styled(Boolean)`
  padding: 0;
`

export const SortableHeader = props => (
  <BaseHeader>
    <StyledButton
      iconSize={2}
      iconBefore={sortedIcon[props.sorted] || 'empty'}
      variant='none'
      onClick={props.sortable ? () => props.onChange(props.sorted) : undefined}
      {...props}
    >
      {props.name}
    </StyledButton>
  </BaseHeader>
)

SortableHeader.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  sortable: PropTypes.bool,
  sorted: PropTypes.oneOf(['asc', 'desc', undefined])
}

SortableHeader.defaultProps = {
  name: undefined,
  sortable: false
}

export const SelectionHeader = props => (
  <BaseHeader width={'64px'}>
    <Flex justifyContent={'center'}>
      <Checkbox
        variant='minimal'
        checkboxVariant='square'
        value={props.selected}
        onChange={props.onChange}
      >
        {props.name}
      </Checkbox>
    </Flex>
  </BaseHeader>
)

SelectionHeader.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool
}

SelectionHeader.defaultProps = {
  name: undefined
}

export const ActionHeader = props => (
  <BaseHeader>
    <StyledButton {...props}>{props.name}</StyledButton>
  </BaseHeader>
)

ActionHeader.propTypes = {
  name: PropTypes.string
}

ActionHeader.defaultProps = {
  name: undefined,
  selected: false
}
