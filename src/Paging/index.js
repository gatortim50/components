import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'defaultTheme'
import PropTypes from 'prop-types'
import { Select } from 'Select'
import { Text } from 'Text'
import { Icon } from 'Icon'
import { Flex, Box } from 'FlexBox'
import { withValue, ValueContext } from 'utils/withValue'

const onItemsPerPageChange = (setValue, itemRangeStart) => selectedSet => {
  const newItemsPerPage = selectedSet.values().next().value
  const newPage = Math.ceil(itemRangeStart / newItemsPerPage)

  setValue({ pageNumber: newPage, itemsPerPage: newItemsPerPage })
}

const onPageChange = (setValue, page, itemsPerPage) => () => {
  setValue({ pageNumber: page, itemsPerPage: itemsPerPage })
}

// eslint-disable-next-line react/display-name
const renderSelectedItemsPerPage = () => itemsPerPage => (
  <StyledText value={itemsPerPage}>{itemsPerPage}</StyledText>
)

const StyledSelect = styled(Select)`
  width: 80px;
  margin: 0;
  align-items: center;
  justify-content: flex-end;
`

const StyledText = styled(Text).attrs({
  fontSize: 0,
  letterSpacing: 1,
  lineHeight: 0,
  color: 'darkGray'
})`
  white-space: nowrap;
`

const DesktopOnlyText = styled(StyledText)`
  @media (max-width: ${themeGet('breakpoints.1')}) {
    display: none;
  }
`

const StyledIcon = styled(Icon).attrs(props => ({
  color: props.onClick ? 'darkGray' : 'lighterGray',
  ml: 3
}))`
  flex: none;
`

const PagingContainer = styled(Flex).attrs({
  justifyContent: 'flex-end',
  alignItems: 'center',
  pr: '30px'
})`
  height: 56px;
`

const PagingComponent = props => {
  const {
    name,
    availableItemsPerPage,
    totalPageItems,
    totalItems,
    hasNext
  } = props

  return (
    <ValueContext.Consumer>
      {({ value, set: setValue }) => {
        const { pageNumber, itemsPerPage } = value

        // Current range of items being displayed
        const itemRangeStart = itemsPerPage * (pageNumber - 1) + 1
        const itemRangeEnd =
          itemRangeStart + Math.min(totalPageItems, itemsPerPage)

        // Previous / Next Page numbers
        const prevPage = pageNumber > 1 ? pageNumber - 1 : null
        const nextPage = hasNext ? pageNumber + 1 : null

        return (
          <PagingContainer>
            <DesktopOnlyText mr={3}>Rows Per Page:</DesktopOnlyText>

            <Box>
              <StyledSelect
                name={`${name}-select`}
                renderSelected={renderSelectedItemsPerPage}
                onChange={onItemsPerPageChange(setValue, itemRangeStart)}
                value={new Set([itemsPerPage])}
                variant={'none'}
                checkboxPosition={'none'}
                icon='caret_down'
                allowDeselection={false}
              >
                {availableItemsPerPage.map((item, index) => (
                  <Select.Item key={`${name}-paging-${item}`} value={item}>
                    {item}
                  </Select.Item>
                ))}
              </StyledSelect>
            </Box>

            <StyledText ml={3}>
              {itemRangeStart} - {itemRangeEnd}{' '}
              {totalItems && `of ${totalItems}`}
            </StyledText>

            <StyledIcon
              icon='chevron_left'
              onClick={
                prevPage ? onPageChange(setValue, prevPage, itemsPerPage) : null
              }
            />

            <StyledIcon
              icon='chevron_right'
              onClick={
                nextPage ? onPageChange(setValue, nextPage, itemsPerPage) : null
              }
            />
          </PagingContainer>
        )
      }}
    </ValueContext.Consumer>
  )
}

PagingComponent.propTypes = {
  name: PropTypes.string.isRequired,
  availableItemsPerPage: PropTypes.arrayOf(PropTypes.number),
  totalPageItems: PropTypes.number,
  totalItems: PropTypes.number,
  value: PropTypes.shape({
    pageNumber: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
  }).isRequired
}

PagingComponent.defaultProps = {
  availableItemsPerPage: [10, 50, 100]
}

export const Paging = withValue('object', PagingComponent)
