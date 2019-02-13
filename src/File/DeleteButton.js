import { Icon } from 'Icon'
import { Button } from 'Button'
import styled from 'styled-components'

export const DeleteButton = styled(Button).attrs(() => ({
  iconBefore: 'close',
  iconSize: 2,
  variant: 'dangerous'
}))`
  height: auto;
  width: auto;
  min-width: 0;
  padding: 4px;
`
