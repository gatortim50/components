import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant, themeGet } from 'defaultTheme'
import { withArrayOf } from 'utils/withArrayOf'
import { withValue, ValueContext } from 'utils/withValue'
import { withEditable } from 'utils/withEditable'
import { Checkbox } from 'Checkbox'
import { Flex, Box } from 'FlexBox'
import { Text } from 'Text'

const checkboxVariants = variant({
  key: 'checkboxes'
})

const StyleCheckbox = styled(Checkbox)``

const StyledText = styled(Text).attrs(props => ({
  as: 'div',
  fill: checkboxVariants(props).fill
}))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: fit-content;
  color: ${themeGet('colors.lighterGray')};
  border-radius: 12px;
  padding-right: 20px;
  font-size: ${themeGet('fontSizes.0')};
  font-weight: ${themeGet('fontWeight.4')};
  letter-spacing: ${themeGet('letterSpacing.1')};
  line-height: ${themeGet('lineHeight.1')};
  height: 24px;
  border: 1px solid;
  white-space: nowrap;
  ${checkboxVariants};
  ${StyleCheckbox} * {
    fill: ${props => props.fill};
  }
`

const CheckboxItem = ({
  variant,
  checkboxVariant,
  readOnly,
  children,
  ...props
}) => (
  <ValueContext.Consumer>
    {({ value: selected, toggle }) => (
      <StyledText
        readOnly={readOnly}
        variant={`${variant}${selected ? '-selected' : ''}`}
        {...props}
      >
        <StyleCheckbox
          checked={selected}
          onClick={toggle}
          readOnly={readOnly}
          variant={checkboxVariant}
        >
          {children && <Box ml='4px'>{children}</Box>}
        </StyleCheckbox>
      </StyledText>
    )}
  </ValueContext.Consumer>
)

CheckboxItem.propTypes = {
  selected: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.string
}

CheckboxItem.defaultProps = {
  selected: false,
  variant: 'default',
  default: null
}

const ArrayWrapper = styled(Flex)`
  flex-wrap: wrap;

  ${StyledText} {
    margin-right: ${themeGet('space.2')};
  }
`

// Expose the base field
export const Boolean = withValue('boolean', withEditable(CheckboxItem))

// Expose the array field
export const BooleanArray = withArrayOf(Boolean, ArrayWrapper)
