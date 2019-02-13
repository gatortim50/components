import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppPickerButton } from 'AppPicker/Button'
import { Chip } from 'AppPicker/Chip'
import { Text } from 'Text'

const StyledItem = styled(AppPickerButton).attrs({
  className: props => `item ${props.selected && 'selected'}`,
  px: '28px',
  py: 1,
  m: 1
})`
  text-transform: capitalize;
  flex-direction: column;
  width: 104px;
  height: auto;
`

export const Item = ({ title, subtitle, abbr, ...rest }) => (
  <StyledItem
    {...rest}
    variant={abbr}
    alt={`${title}${subtitle && `: ${subtitle}`}`}
  >
    <Chip>{abbr}</Chip>
    <Text fontSize={1} fontWeight={4} lineHeight={1} letterSpacing={0} mt={1}>
      {title}
    </Text>
  </StyledItem>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  abbr: PropTypes.string.isRequired
}
