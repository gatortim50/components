import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Pane } from 'Pane'
import { Item } from './Item'

export const List = styled(Pane).attrs({
  elevation: 1,
  borderRadius: '6px',
  bg: 'white',
  mt: 1,
  p: 0,
  pt: '6px',
  pb: 1,
  width: '100%'
})``

List.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string
}

List.defaultProps = {
  as: 'ul'
}

List.Item = Item
