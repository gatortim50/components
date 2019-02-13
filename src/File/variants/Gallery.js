import React from 'react'
import check from 'check-types'
import styled from 'styled-components'
import { backgroundSize, borderRadius } from 'styled-system'
import { getBaseMimeType } from '../mime-types'
import { Flex, Box } from 'FlexBox'
import { File } from '../index'
import { FileContext } from '../FileContext'
import { Upload, StyledUpload } from '../Upload'
import { DeleteButton } from '../DeleteButton'

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  right: 7px; 
  top: 5px;
`

const StyledImage = styled.img`
  ${borderRadius}
  ${backgroundSize}
  width: 100%;
  height: auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0), 
    0 2px 1px -1px rgba(0, 0, 0, 0),
    0 1px 3px 0 rgba(0, 0, 0, 0);
`

const ImageWrapper = styled(Box)`
  position: relative;
  width: 64px;
  max-width: 64px;
  min-height: 36px; // ensures that there is enough room for the delete button with small images
`

const Gallery = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
 
  ${StyledUpload} {
    width: 100%;
    display: block;
  }
`

const Item = (props) => {
  const { path, src, mime, id } = props

  switch (getBaseMimeType(mime)) {
    case 'image':
    case 'video':
      return (
        (
          <FileContext.Consumer>
            {({ readOnly, onDelete }) => (
              <ImageWrapper key={`gallery-item-${id}`} mt={1} mr={1}>
                <StyledImage
                  borderRadius={1}
                  backgroundSize={'contain'}
                  src={src || path}
                />
                {!readOnly && <StyledDeleteButton onClick={(event) => onDelete(props, event)} />}
              </ImageWrapper>
            )}
          </FileContext.Consumer>
        )
      )

    default:
      throw new Error('Only `video` and `image` are supported with the `gallery` variant.')
  }
}

export const itemRenderer = (items) => (
  <Gallery>
    {items.map((item) => {

      const key = `gallery-item-${item.id}`

      if (check.nonEmptyString(item.uploadState)) {
        return (<Upload {...item} key={key} />)
      }

      return (
        <Item
          {...item}
          key={key}
        />
      )
    })}
  </Gallery>
)

export const GalleryVariant = (props) => (
  <File
    {...props}
    renderItems={itemRenderer}
  />
)

GalleryVariant.defaultProps = {
  emptyText: 'No media',
  uploadText: 'Upload an image or video'
}
