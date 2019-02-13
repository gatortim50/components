import React, { PureComponent } from 'react'
import { Pane } from 'Pane'
import { Item } from './Item'
import { ItemGroup } from './ItemGroup'
import { width } from 'styled-system'

export class SideNav extends PureComponent {

  static Item = Item

  static ItemGroup = ItemGroup

  render () {
    const { children, width, ...rest } = this.props

    return (
      <Pane role='menu' width={width} {...rest}>
        {children}
      </Pane>
    )
  }

}

SideNav.propTypes = {
  ...width.propTypes
}

SideNav.defaultProps = {
  width: [1, 1 / 3]
}
