import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { FileField, FileList, FileGallery } from '../../../src'
import { uploadStates } from 'File/uploadStates'
import { transformFile } from 'File/utils'
import { Icon } from 'Icon'
import random from 'lodash/random'
import { Pane } from 'Pane'
import { Button } from 'Button'
import { BooleanValue } from 'react-values'
import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'

import image1 from './files/1.jpg'
import image2 from './files/2.jpg'
import image3 from './files/3.jpg'
import image4 from './files/4.jpg'

const { mimeTypes } = FileField

const EditButton = ({ toggle, readOnly }) => (
  <Pane m={2} width='100%'>
    <Button onClick={toggle} variant='primary'>
      {readOnly ? 'View Mode' : 'Edit Mode'}
    </Button>
  </Pane>
)

/**
 * Function that creates a fake upload to display the various upload states
 *
 * @param state
 * @param i
 * @param progress
 * @param overrides {{}}
 * @returns {*}
 */
const createFakeUpload = (state, i, progress = 0, overrides) => {
  return transformFile(
    {
      path: `fake-${i}.jpg`,
      filename: `generic_medical_final-${i}.jpg`,
      mime: 'image/jpeg',
      progress,
      ...overrides
    },
    state
  )
}

/**
 * Adds a unique id to the object
 *
 * @param array {*}
 * @returns {[]}
 */
const withIds = array =>
  array.map(data => Object.assign(data, { id: uniqueId('file-') }))

/**
 * An array of images to be displayed in the gallery example
 *
 * @type {any[]}
 */
const images = withIds([
  {
    filename: 'image1.jpeg',
    path: image1,
    mime: mimeTypes.image.jpeg
  },
  {
    filename: 'image2.jpeg',
    path: image2,
    mime: mimeTypes.image.jpeg
  },
  {
    filename: 'image3.jpeg',
    path: image3,
    mime: mimeTypes.image.jpeg
  },
  {
    filename: 'image4.jpeg',
    path: image4,
    mime: mimeTypes.image.jpeg
  }
])

/**
 * An array of files to be shown in the list example
 *
 * @type {any[]}
 */
const documents = withIds([
  {
    filename: 'document-1.txt',
    path: 'document-1.txt',
    mime: mimeTypes.text.plain
  },
  {
    filename: 'document-2.txt',
    path: 'document-2.txt',
    mime: mimeTypes.text.plain
  }
])

/**
 * An array of files to be shown in the list example
 *
 * @type {[]}
 */
const allTypes = withIds(
  Object.keys(mimeTypes).reduce((array, baseMimeType) => {
    if (baseMimeType === 'default') {
      return array
    }

    return [
      ...array,
      ...Object.entries(mimeTypes[baseMimeType]).map(([extension, mime]) => {
        return {
          filename: `${baseMimeType}-file-.${extension}`,
          path: `${baseMimeType}-file.${extension}`,
          mime
        }
      })
    ]
  }, [])
)

const uploadCache = {}

/**
 * Props that are shared among the examples
 */
const sharedProps = () => ({
  onCancel: file => {
    if (uploadCache[file.id]) {
      const { interval, timeout } = uploadCache[file.id]
      clearInterval(interval)
      clearTimeout(timeout)
      delete uploadCache[file.id]
    }
  },
  onDelete: file => {
    console.warn(`Deleting ${file.filename}`)
  },
  onDrop: ({ onProgress }) => file => {
    return new Promise(resolve => {
      let totalTime = random(2000, 10000, false)
      let progressUpdateInterval = 100
      let fakeProgress = 0
      let progressIncrementSize = (progressUpdateInterval / totalTime) * 100

      const interval = setInterval(() => {
        fakeProgress += progressIncrementSize
        onProgress(fakeProgress)
      }, progressUpdateInterval)

      const timeout = setTimeout(() => {
        clearInterval(interval)
        file.newPropertyAddedByOnDrop = 'value'
        resolve(file)
      }, totalTime)

      uploadCache[file.id] = {
        timeout,
        interval
      }
    })
  },
  processFile: file =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(file)
        delete uploadCache[file.id]
      }, 3000)
    }),
  retryUpload: async file => {
    console.log(`Retrying upload: ${file.id}`)
  }
})

const Wrapper = ({ children }) => (
  <BooleanValue>
    {({ toggle, value: readOnly }) => (
      <React.Fragment>
        <EditButton readOnly={readOnly} toggle={toggle} />
        {children(readOnly)}
      </React.Fragment>
    )}
  </BooleanValue>
)

const StyledPane = styled(Pane).attrs(() => ({
  m: '50px auto',
  width: ['100%', 768]
}))``

const Examples = props => {
  const { Component, items, variant, labelIcon, readOnly } = props

  return (
    <React.Fragment>
      <StyledPane>
        <Component
          {...sharedProps()}
          label={`Single (${variant}) [EMPTY]`}
          labelIcon={labelIcon}
          description=''
          multiple={false}
          readOnly={readOnly}
        />
      </StyledPane>
      <StyledPane>
        <Component
          {...sharedProps()}
          label={`FILE (${variant}) [ARRAY] [EMPTY]`}
          labelIcon={labelIcon}
          description=''
          readOnly={readOnly}
        />
      </StyledPane>
      <StyledPane>
        <Component
          {...sharedProps()}
          defaultValue={[items[0]]}
          label={`FILE (${variant}) [SINGLE]`}
          labelIcon={labelIcon}
          description=''
          multiple={false}
          readOnly={readOnly}
        />
      </StyledPane>
      <StyledPane>
        <Component
          {...sharedProps()}
          label={`FILE (${variant}) [ARRAY]`}
          labelIcon={labelIcon}
          description=''
          defaultValue={items}
          readOnly={readOnly}
        />
      </StyledPane>
      <StyledPane>
        <Component
          {...sharedProps()}
          defaultValue={[
            items[0],
            createFakeUpload(uploadStates.queued, 0),
            createFakeUpload(uploadStates.uploading, 1, 29.6),
            createFakeUpload(uploadStates.failed, 2),
            createFakeUpload(uploadStates.succeeded, 3),
            createFakeUpload(uploadStates.processing, 4)
          ]}
          label='Upload states'
          labelIcon={labelIcon}
          description=''
          readOnly={readOnly}
        />
      </StyledPane>
    </React.Fragment>
  )
}

storiesOf('File', module)
  .add('Thumbnail Variant', () => (
    <Wrapper>
      {readOnly => (
        <Examples
          items={images}
          Component={FileGallery}
          readOnly={readOnly}
          variant='thumbnail'
          labelIcon='image'
        />
      )}
    </Wrapper>
  ))
  .add('List Variant', () => (
    <Wrapper>
      {readOnly => (
        <React.Fragment>
          <Examples
            items={documents}
            Component={FileList}
            readOnly={readOnly}
            variant='list'
            labelIcon='file'
          />
          <StyledPane>
            <FileList
              {...sharedProps()}
              label={`One of each mime type`}
              labelIcon='file'
              description=''
              defaultValue={allTypes}
              readOnly={readOnly}
            />
          </StyledPane>
        </React.Fragment>
      )}
    </Wrapper>
  ))
