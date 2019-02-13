import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from 'Icon'
import { Item } from 'List/Item'
import { ValueContext } from 'utils/withValue'

const getOnClick = (
  checked,
  allowDeselection,
  multiple,
  maxItems,
  value,
  valueProps
) => {
  const enabled =
    (!multiple && (!checked || (checked && allowDeselection))) ||
    (multiple && checked) ||
    (multiple && maxItems <= 0) ||
    (multiple && valueProps.value.size < maxItems)

  if (!enabled) {
    return null
  }

  if (checked) {
    return () => valueProps.remove(value)
  }

  if (multiple) {
    return () => valueProps.set(new Set([...valueProps.value, value]))
  }

  return () => valueProps.set(new Set([value]))
}

const StyledIcon = styled(Icon).attrs(({ checkboxPosition }) => ({
  ml: checkboxPosition === 'after' ? 2 : 0,
  mr: checkboxPosition === 'before' ? 2 : 0,
  color: 'darker'
}))``

const StyledOption = styled(Item).attrs(({ checkboxPosition }) => ({
  flexDirection: checkboxPosition === 'before' ? 'row-reverse' : 'row',
  alignItems: checkboxPosition === 'after' ? 'flex-end' : 'flex-start',
  justifyContent: checkboxPosition === 'before' ? 'flex-end' : 'space-between',
  pl: checkboxPosition === 'after' ? 3 : 2,
  pr: checkboxPosition === 'before' ? 3 : 2
}))``

export const Option = ({
  checkboxPosition,
  children,
  checkedIcon,
  uncheckedIcon,
  allowDeselection,
  multiple,
  maxItems,
  value,
  ...rest
}) => (
  <ValueContext.Consumer>
    {valueProps => {
      const checked = valueProps.value.has(value)
      const onClick = getOnClick(
        checked,
        allowDeselection,
        multiple,
        maxItems,
        value,
        valueProps
      )

      return (
        <StyledOption
          onClick={onClick}
          checkboxPosition={checkboxPosition}
          {...rest}
        >
          {children}

          {checkboxPosition !== 'none' && (
            <StyledIcon
              icon={checked ? checkedIcon : uncheckedIcon}
              checkboxPosition={checkboxPosition}
            />
          )}
        </StyledOption>
      )
    }}
  </ValueContext.Consumer>
)

Option.propTypes = {
  children: PropTypes.node.isRequired,
  checkboxPosition: PropTypes.oneOf(['before', 'after', 'none']),
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  maxItems: PropTypes.number,
  multiple: PropTypes.bool,
  allowDeselection: PropTypes.bool,
  value: PropTypes.any.isRequired
}

Option.defaultProps = {
  checkboxPosition: 'after',
  checkedIcon: 'done',
  uncheckedIcon: 'empty',
  multiple: false,
  maxItems: null,
  allowDeselection: true
}
