import { getBaseMimeType } from 'File/mime-types'
import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'defaultTheme'
import { Flex } from 'FlexBox'
import { Text } from 'Text'
import { File } from 'File'
import { Upload } from 'File/Upload'
import { FileContext } from 'File/FileContext'
import { DeleteButton } from 'File/DeleteButton'
import check from 'check-types'
import { Icon } from 'Icon'

const ListWrapper = styled.div`
  & > * {
    margin: 0 0 ${themeGet('space.1')} 0;
    min-height: 45px;
  }
`

const StyledIcon = styled(Icon).attrs(() => ({
  color: null,
  size: '40px 36px'
}))`
  margin-right: ${themeGet('space.1')};
  filter: drop-shadow( 0 1px 1px rgba(0,0,0,0.30));
`

const StyledDeleteButton = styled(DeleteButton)`
  margin-right: ${themeGet('space.1')}; 
`

const StyledItem = styled(Flex).attrs(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  mt: 1
}))`
  position: relative;
`

export const getIconKey = ({ mime }) => {
  const base = File.getBaseMimeType(mime)
  const { mimeTypes } = File

  switch (true) {
    case base === 'image':
      return 'png'

    case base === 'video':
      return 'mp4'

    case mime === mimeTypes.application.msword:
    case mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'doc'

    case mime === mimeTypes.text.csv:
      return 'csv'

    case mime === mimeTypes.application.excel:
    case mime === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'xls'

    case mime === mimeTypes.application.pdf:
      return 'pdf'

    case base === 'audio':
      return 'wav'

    case 'application':
      return 'application'

    case base === 'text':
    default:
      return 'generic_file'
  }
}

const Item = (props) => {
  const { mime, filename, id } = props
  const iconKey = getIconKey(props)

  switch (getBaseMimeType(mime)) {
    case 'image':
    case 'video':
    case 'text':
    case 'audio':
    case 'application':
    default:
      return (
        <FileContext.Consumer>
          {({ onDelete, readOnly }) => (
            <StyledItem>
              <Flex alignItems='center'>
                <StyledIcon icon={iconKey} />
                <Text data-id={id}>{filename}</Text>
              </Flex>

              {!readOnly && <StyledDeleteButton onClick={(event) => onDelete(props, event)} />}
            </StyledItem>
          )}
        </FileContext.Consumer>
      )
  }
}

export const renderer = (items) => (
  <ListWrapper>
    {items.map((item) => {

      const key = `list-item-${item.id}`

      if (check.nonEmptyString(item.uploadState)) {
        return (<Upload key={key} {...item} />)
      }

      return (
        <Item key={key} {...item} />
      )
    })}
  </ListWrapper>
)

export const ListVariant = (props) => (
  <File
    {...props}
    renderItems={renderer}
  />
)

ListVariant.defaultProps = {
  emptyText: 'No documents',
  uploadText: 'Upload a document'
}
