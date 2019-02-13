import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import check from 'check-types'
import { transparentize } from 'polished'
import { themeGet } from 'defaultTheme'
import { Pane } from 'Pane'
import * as HeaderComponents from './Headers'
import * as CellComponents from './Cells'
import { withValue, ValueContext } from 'utils/withValue'

const StyledTable = styled(Pane).attrs({
  as: 'table',
  elevation: 1,
  borderRadius: '6px',
  bg: 'white',
  mt: 1,
  p: 0,
  pt: '6px',
  pb: 1,
  width: '100%'
})`
  border-collapse: collapse;
`

const Headers = styled(Pane).attrs({
  as: 'tr'
})`
  height: 56px;
  border-bottom: 1px solid ${themeGet('colors.lightestGray')};

  @media (max-width: ${themeGet('breakpoints.1')}) {
    display: none;
  }
`

const Row = styled(Pane).attrs({
  as: 'tr'
})`
  box-sizing: border-box;
  border-bottom: 1px solid ${themeGet('colors.lightestGray')};
  background: ${props =>
    props.selected
      ? transparentize(0.5, themeGet('colors.lighter')(props))
      : themeGet('colors.white')};

  &:hover {
    background: ${props =>
    transparentize(0.5, themeGet('colors.lightestGray')(props))};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  }

  @media (max-width: ${themeGet('breakpoints.1')}) {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;
  }
`

class TableComponent extends React.PureComponent {

  onSelectAll = ({ set }) => selected => {
    if (selected) {
      set('selectedIndexes', this.props.rows.map((rows, index) => index))
    } else {
      set('selectedIndexes', [])
    }
  }

  onSelectIndex = ({ value, set }, index) => selected => {
    if (selected) {
      set('selectedIndexes', [...value.selectedIndexes, index])
    } else {
      set(
        'selectedIndexes',
        value.selectedIndexes.filter(item => item !== index)
      )
    }
  }

  nextSort = {
    asc: 'desc',
    desc: undefined,
    none: 'asc'
  }

  onSortChange = ({ value, set }, index) => (currentSort = 'none') => {
    const nextSort = this.nextSort[currentSort]

    const newSortedColumns = { ...value.sortedColumns }
    if (nextSort) {
      newSortedColumns[index] = nextSort
    } else {
      delete newSortedColumns[index]
    }

    set('sortedColumns', newSortedColumns)
  }

  renderHeader = valueProps => (header, index) => {
    const componentProps = {
      key: `${name}-header-${index}`,
      sorted: valueProps.value.sortedColumns[index],
      onChange: this.onSortChange(valueProps, index),
      index
    }

    // Otherwise, we assume its a custom render method
    // Either the header is a function or contains a render function
    const renderMethod = check.function(header) ? header : header.render

    if (renderMethod) {
      // If there is a render method, we pass in the
      // common component props as defaults, along with the `header` props
      return (
        <Table.Headers.BaseHeader key={componentProps.key}>
          {renderMethod({ ...componentProps, ...header })}
        </Table.Headers.BaseHeader>
      )
    } else if (check.string(header)) {
      // If the header is just a string
      // we pass in the name prop
      return <Table.Headers.SortableHeader {...componentProps} name={header} />
    } else {
      // If there is no render method defined, we assume the default SortableHeader
      // and pass in the props
      return <Table.Headers.SortableHeader {...componentProps} {...header} />
    }
  }

  renderCell = (cell, index) => {
    // Otherwise, we assume its a custom render method
    // Either the header is a function or contains a render function
    const renderMethod = check.function(cell) ? cell : cell.render

    if (renderMethod) {
      // If there is a render method we pass in the `cell` props
      return (
        <Table.Cells.SortableCell key={`${name}-cell-${index}`} index={index}>
          {renderMethod({ ...cell })}
        </Table.Cells.SortableCell>
      )
    } else if (check.string(cell)) {
      // If the cell is just a string
      // we pass in the name prop
      return (
        <Table.Cells.SortableCell
          key={`${name}-cell-${index}`}
          name={cell}
          index={index}
        />
      )
    } else {
      // If there is no render method defined, we assume the default SortableHeader
      // and pass in the props
      return (
        <Table.Cells.SortableCell
          key={`${name}-cell-${index}`}
          {...cell}
          index={index}
        />
      )
    }
  }

  render () {
    const { name, headers, rows, selectable, actions } = this.props

    return (
      <ValueContext.Consumer>
        {valueProps => (
          <StyledTable name={name}>
            <tbody>
              {headers && (
                <Headers>
                  {// Automatically add the select all header
                    selectable && (
                      <Table.Headers.SelectionHeader
                        itemKey={`${name}-header-select-all`}
                        onChange={this.onSelectAll(valueProps)}
                      />
                    )}

                  {headers.map(this.renderHeader(valueProps))}

                  {// Automatically add the actions header
                    actions && (
                      <Table.Headers.BaseHeader
                        itemKey={`${name}-header-select-all`}
                      />
                    )}
                </Headers>
              )}

              {rows.map((row, index) => (
                <Row
                  key={`${name}-row-${index}`}
                  selected={valueProps.value.selectedIndexes.includes(index)}
                >
                  {// Automatically add the selectable row cell
                    selectable && (
                      <Table.Cells.SelectionCell
                        itemKey={`${name}-header-select-${index}`}
                        onChange={this.onSelectIndex(valueProps, index)}
                        selected={valueProps.value.selectedIndexes.includes(
                          index
                        )}
                      />
                    )}

                  {row.map(this.renderCell)}

                  {// Row Actions
                    actions && (
                      <Table.Cells.ActionCell
                        {...valueProps}
                        {...this.props}
                        render={actions}
                        index={index}
                      />
                    )}
                </Row>
              ))}
            </tbody>
          </StyledTable>
        )}
      </ValueContext.Consumer>
    )
  }

}

TableComponent.propTypes = {
  name: PropTypes.string.isRequired,
  headers: PropTypes.array,
  rows: PropTypes.array,
  selectable: PropTypes.bool,
  actions: PropTypes.func
}

TableComponent.defaultProps = {
  selectable: false
}

TableComponent.Headers = {
  ...HeaderComponents
}

TableComponent.Cells = {
  ...CellComponents
}

export const Table = withValue('object', TableComponent)
