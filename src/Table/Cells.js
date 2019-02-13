import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pane } from 'Pane'
import { Text } from 'Text'
import { themeGet } from 'defaultTheme'
import { Boolean } from 'Boolean'
import { Flex } from 'FlexBox'
import { Popover } from 'Popover'
import { Button } from 'Button'

// Base Cell Components
export const BaseCell = styled(Text).attrs({
  as: 'td'
})`
  @media (max-width: ${themeGet('breakpoints.1')}) {
    order: ${props => props.index || 0};
    width: ${props => (props.index > 0 ? '100%' : 'auto')};
    height: 48px;
    display: flex;
    align-items: center;
  }
`

// Sortable Cell Components
export const SortableCell = styled(BaseCell).attrs(props => ({
  pl: 4,
  children: props.name
}))`
  @media (max-width: ${themeGet('breakpoints.1')}) {
    padding-left: ${props => (props.index > 0 ? '86px' : '24px')};
  }
`

SortableCell.propTypes = {
  name: PropTypes.string
}

// Selection Cell components
const Checkbox = styled(Boolean)`
  padding: 0;
`
const StyledSelectionCell = styled(BaseCell).attrs({
  p: 0,
  width: '64px'
})`
  @media (max-width: ${themeGet('breakpoints.1')}) {
    padding-left: 40px;
    margin-bottom: 0;
    align-self: center;
  }
`

export const SelectionCell = props => (
  <StyledSelectionCell p={0} width={'64px'}>
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
  </StyledSelectionCell>
)

SelectionCell.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool
}

SelectionCell.defaultProps = {
  name: undefined
}

// Action Cell Components
const ActionPopover = styled(Popover)`
  position: relative;
  transform: unset;
`

const StyledActionCell = styled(BaseCell)`
  max-width: 88px;
  @media (max-width: ${themeGet('breakpoints.1')}) {
    order: 0;
    max-width: 88px;
    margin-left: auto;
    margin-right: 8px;
    margin-bottom: 0;
    align-self: center;
  }
`

const MoreButton = styled(Button).attrs(props => ({
  iconBefore: 'more_vert',
  fgColor: themeGet('colors.lighterGray')(props),
  iconSize: 3,
  m: 0
}))``

const ActionMenuPane = styled(Pane)`
  position: absolute;
  max-width: unset;
  right: 0;
  margin-right: 24px;
  top: -6px;
`

export const ActionCell = props => (
  <StyledActionCell>
    <ActionPopover
      position='bottom-right'
      render={({ close }) => (
        <ActionMenuPane>{props.render({ ...props, close })}</ActionMenuPane>
      )}
    >
      <MoreButton />
    </ActionPopover>
  </StyledActionCell>
)

ActionCell.propTypes = {
  render: PropTypes.func.isRequired
}

SelectionCell.defaultProps = {
  name: undefined
}
