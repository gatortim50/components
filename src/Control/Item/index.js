import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'Button'
import { Text } from 'Text'

const StyledItem = styled(Button)`
  border-radius: 0;
  background: none;
  box-shadow: none;
  margin: 0;
`

export const Item = ({ icon, label, ...rest }) => {
  return (
    <StyledItem iconBefore={icon} {...rest} iconAfter={undefined}>
      {label && <Text>{label}</Text>}
    </StyledItem>
  )
}

Item.propTypes = {
  children: PropTypes.node
}
