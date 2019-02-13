import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { themeGet } from 'defaultTheme'
import PropTypes from 'prop-types'
import { Popover } from 'Popover'
import { Button } from 'Button'
import { Flex } from 'FlexBox'
import { List as Options } from 'List'
import { Option } from './Option'
import { Label } from 'Label'
import { withValue, ValueContext } from 'utils/withValue'

const SelectItem = styled(Label).attrs(props => ({
  fontSize: 1,
  lineHeight: 1,
  fontWeight: 4
}))`
  text-transform: none;
  margin: 0;
  align-items: center;
  white-space: nowrap;
  ${space}
`

const StyledButton = styled(Button)`
  padding: 0;
  padding-left: ${themeGet('space.1')};
  padding-right: ${themeGet('space.1')};
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  &:disabled {
    background: none;
  }
`
// Default method use to render the selected
const defaultRenderSelected = ({
  selectedItemCutoff,
  selectedItemEmptyText,
  children
}) => set => {
  if (!set || !set.size) {
    return <Select.Item>{selectedItemEmptyText}</Select.Item>
  } else if (set.size <= selectedItemCutoff) {
    return (
      <Flex>
        {React.Children.toArray(children)
          .filter(child => set.has(child.props.value))
          .map((child, index) => (
            <Select.Item
              key={`selected-${child.props.value}`}
              mr={1}
              {...child.props}
            >
              {child.props.children} {index < set.size - 1 ? ', ' : ''}
            </Select.Item>
          ))}
      </Flex>
    )
  } else {
    return (
      <Select.Item>
        {set.size} of {children.length} Items Selected
      </Select.Item>
    )
  }
}

const SelectComponent = props => {
  const {
    name,
    children,
    readOnly,
    icon,
    dropdownPosition,
    renderSelected: renderSelectedSetup,
    selectedItemCutoff,
    selectedItemEmptyText,
    allowDeselection,
    checkboxPosition,
    multiple,
    maxItems,
    ...rest
  } = props

  const renderSelected = renderSelectedSetup({
    selectedItemCutoff,
    selectedItemEmptyText,
    children
  })

  return (
    <ValueContext.Consumer>
      {({ value }) => (
        <Popover
          width={'100%'}
          position={dropdownPosition}
          render={() =>
            !readOnly && (
              <Options>
                {React.Children.map(children, (child, index) => (
                  <Option
                    key={`${name}-option-${index}`}
                    checkboxPosition={checkboxPosition}
                    maxItems={maxItems}
                    multiple={multiple}
                    allowDeselection={allowDeselection}
                    value={child.props.value}
                  >
                    {child}
                  </Option>
                ))}
              </Options>
            )
          }
        >
          <StyledButton
            {...rest}
            iconAfter={readOnly ? 'empty' : icon}
            disabled={readOnly}
          >
            {renderSelected(value)}
          </StyledButton>
        </Popover>
      )}
    </ValueContext.Consumer>
  )
}

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Set),
  children: PropTypes.node.isRequired,
  dropdownPosition: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
  renderSelected: PropTypes.func,
  selectedItemCutoff: PropTypes.number,
  selectedItemEmptyText: PropTypes.string,
  allowDeselection: PropTypes.bool,
  checkboxPosition: PropTypes.oneOf(['before', 'after', 'none']),
  multiple: PropTypes.bool,
  maxItems: PropTypes.number
}

SelectComponent.defaultProps = {
  dropdownPosition: 'bottom-left',
  variant: 'dropdown',
  icon: 'chevron_down',
  renderSelected: defaultRenderSelected,
  selectedItemCutoff: 3,
  selectedItemEmptyText: 'No Items Selected',
  allowDeselection: true,
  checkboxPosition: 'after',
  multiple: false,
  maxItems: null
}

SelectComponent.Item = SelectItem

export const Select = withValue('set', SelectComponent)
