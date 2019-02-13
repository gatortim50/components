import styled from 'styled-components'
import { Pane } from 'Pane'
import { Item } from './Item'
import { Divider } from './Divider'
import { ItemGroup } from './ItemGroup'
import { themeGet } from 'defaultTheme'

export const Menu = styled(Pane).attrs(props => ({
  role: 'menu',
  borderRadius: '6px',
  mt: '6px',
  py: 1,
  bg: themeGet('colors.white')(props)
}))``

Menu.Divider = Divider
Menu.Item = Item
Menu.ItemGroup = ItemGroup
