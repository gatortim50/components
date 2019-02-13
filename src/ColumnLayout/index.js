import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'FlexBox'
import { style, themeGet } from 'styled-system'

// This gets the actual item width. It uses the weight
const getItemWidth = ({ weight }) => `${Math.min(1, weight) * 100}%`

const gutter = style({
  prop: 'gutter',
  cssProperty: 'padding',
  transformValue: n => `calc(${n}/2)`,
  key: 'space'
})

const Item = styled(Box)`
  width: ${getItemWidth};
  ${gutter};
`

Item.defaultProps = {
  weight: 0.5
}

Item.propTypes = {
  weight: PropTypes.oneOf([0.5, 1.0, 2.0])
}

const StyledContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  ${gutter};
`

const leftGap = style({
  prop: 'columnGap',
  cssProperty: 'padding-left',
  transformValue: n => `calc(${n}/2)`,
  key: 'space'
})

const rightGap = style({
  prop: 'columnGap',
  cssProperty: 'padding-right',
  transformValue: n => `calc(${n}/2)`,
  key: 'space'
})

const StyledColumn = styled(Flex)`
  flex-wrap: wrap;

  @media (min-width: ${themeGet('breakpoints.1')}) {
    width: ${({ columns }) => `${100 / columns}%`};

    &:not(:first-of-type) {
      ${leftGap};
    }

    &:not(:last-of-type) {
      ${rightGap};
    }
  }
`

const StyledColumns = styled(Flex)`
  flex: 1;
  flex-wrap: wrap;
`

export class ColumnLayout extends React.Component {

  splitChildrenArray (children) {
    const items = {
      header: [],
      middle: [],
      footer: []
    }

    while (children[0] && children[0].props.weight === 2.0) {
      items.header.push(children.shift())
    }

    // Setup Footer Items
    while (
      children[children.length - 1] &&
      children[children.length - 1].props.weight === 2.0
    ) {
      items.footer.unshift(children.pop())
    }

    // The rest are the middle item
    items.middle = children

    return items
  }

  getItemColumn = (index, totalItems, columns) => {
    const itemsPerColumn = Math.ceil(totalItems / columns)
    return Math.floor((index / itemsPerColumn) % columns)
  }

  renderItems (children, columns, additionalProps) {
    const items = this.splitChildrenArray(React.Children.toArray(children))

    return (
      <React.Fragment>
        {items.header.map((child, index) => (
          <Item
            key={`${this.props.name}-header-${index}`}
            weight={2.0}
            {...additionalProps}
          >
            {child}
          </Item>
        ))}

        <StyledColumns>
          {items.middle
            // Split up the middle items in their respective columns
            .reduce((acc, current, index) => {
              // Fetch this item's column
              const column = this.getItemColumn(
                index,
                items.middle.length,
                columns
              )
              // Add the item to the column
              acc[column] = (acc[column] || []).concat([current])
              return acc
            }, [])
            .map((column, colIndex) => (
              <StyledColumn
                key={`${this.props.name}-col-${colIndex}`}
                columns={columns}
                columnGap={additionalProps.columnGap}
              >
                {column.map((child, index) => (
                  <Item
                    key={`${this.props.name}-col-${colIndex}-${index}`}
                    weight={
                      child.props.weight ? Math.min(1, child.props.weight) : 1
                    }
                    {...additionalProps}
                  >
                    {child}
                  </Item>
                ))}
              </StyledColumn>
            ))}
        </StyledColumns>

        {items.footer.map((child, index) => (
          <Item
            key={`${this.props.name}-footer-${index}`}
            weight={2.0}
            {...additionalProps}
          >
            {child}
          </Item>
        ))}
      </React.Fragment>
    )
  }

  render () {
    const { children, columns, style, className, ...rest } = this.props

    return (
      <StyledContainer
        gutter={this.props.gutter}
        name={this.props.name}
        style={style}
        className={className}
      >
        {this.renderItems(children, columns, rest)}
      </StyledContainer>
    )
  }

}

ColumnLayout.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
}

ColumnLayout.defaultProps = {
  columns: 2
}
