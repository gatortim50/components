import React, { memo } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from 'Icon'
import { Text } from 'Text'
import { Flex } from 'FlexBox'

const Label = styled(Text).attrs({
  as: 'label'
})`
  cursor: pointer;
  display: inline-block;
  user-select: none;
`

const icons = {
  default: {
    checked: 'round_checked',
    unchecked: 'round_unchecked'
  },
  square: {
    checked: 'checkbox',
    unchecked: 'checkbox_outlined'
  }
}

const CheckboxComponent = ({ checked, children, onClick, variant, ...etc }) => {
  let iconToUse = checked ? icons[variant].checked : icons[variant].unchecked

  return (
    <Label onClick={onClick}>
      <Flex alignItems='center' flexDirection='row'>
        <Icon icon={iconToUse} {...etc} />
        {children}
      </Flex>
    </Label>
  )
}

CheckboxComponent.propTypes = {
  checked: propTypes.bool,
  variant: propTypes.oneOf(['default', 'square'])
}

CheckboxComponent.defaultProps = {
  checked: false,
  variant: 'default'
}

export const Checkbox = memo(CheckboxComponent)
