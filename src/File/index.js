import React from 'react'
import PropTypes from 'prop-types'
import check from 'check-types'
import classNames from 'classnames'
import DropZone from 'react-dropzone'
import styled from 'styled-components'
import { space, borderRadius, fontSize, fontFamily } from 'styled-system'

import { FileContext } from './FileContext'
import { transformFile, generateId } from './utils'
import { uploadStates } from './uploadStates'
import { themeGet } from 'defaultTheme'
import { withValue } from 'utils/withValue'
import { withEditable } from 'utils/withEditable'
import { Text } from 'Text'
import { Icon } from 'Icon'
import { Flex } from 'FlexBox'

import { getBaseMimeType, mimeTypes } from './mime-types'

const StyleWrapper = styled.div.attrs(() => ({
  mt: 1,
  borderRadius: 2,
  fontSize: 1,
  fontFamily: 'sansSerif'
}))`
  .dropzone {
    width: 100%;
    min-width: 150px;
    text-align: center;
    border: 2px dashed ${themeGet('colors.lightestGray')};
    color: ${themeGet('colors.darker')};
    ${fontSize}
    ${fontFamily}
    ${space};
    ${borderRadius};
    
    &.dropzone--isActive {
      border: 2px solid ${themeGet('colors.darker')};
    }
  }
`

const preventFormSubmit = (event = {}) => {
  if (check.function(event.preventDefault)) {
    event.preventDefault()
  }
}

/**
 * Casts any value to an array
 *
 * @param value {*}
 * @returns {*[]}
 */
const toArray = (value) => check.array(value) ? value : [value]

export class FileComponent extends React.Component {

  /**
   * Shortcut to the mimeTypes object
   *
   * @type {{image, application, text, audio, video}}
   */
  static mimeTypes = mimeTypes

  /**
   * A function that returns the first part of a mime type
   *
   * eg: passing `image/jpg` would return 'image'
   *
   * @type {function}
   * @returns {string}
   */
  static getBaseMimeType = getBaseMimeType

  /**
   * The possible states that an upload can be in
   *
   * @type {{processing: string, uploading: string, failed: string, succeeded: string}}
   */
  static uploadStates = uploadStates

  componentDidMount () {

    /**
     * Check to see if any of the files in the array are missing ids. If they are:
     * 1) log a warning saying that this should not happen
     * 2) update the array with generated ids so the component still works
     */
    const shouldUpdate = this.props.value.some((file) => {
      if (check.not.nonEmptyString(file.id)) {
        console.warn(
          'All files must have an id. Ids are being generated and added. THIS SHOULD NOT HAPPEN.'
        )
        return true
      }
      return false
    })

    if (shouldUpdate) {
      this.props.onChange({
        target: {

          // loop through items adding ids where they are missing
          value: this.props.value.map((file) => {
            if (check.nonEmptyString(file.id)) {
              return file
            } else {
              return {
                ...file,
                id: generateId()
              }
            }
          })
        }
      })
    }
  }

  /**
   * Function that returns the index of an upload or -1 if not found
   *
   * @param id {string|number} the file id
   * @type {function}
   * @returns {number}
   */
  findUploadIndex = id => this.props.value.findIndex(upload => upload.id === id)

  /**
   * Removes an upload from local state
   *
   * @param file {*}
   */
  removeUpload = file => {
    const index = this.findUploadIndex(file.id)

    if (index !== -1) {
      const uploads = [...this.props.value]
      uploads.splice(index, 1)
      this.updateState(uploads)
    }

    this.handleQueueing()
  }

  /**
   * Updates the `this.props.value` array
   **
   * @param nextState {*[]}
   * @param callback {function=}
   */
  updateState = (nextState, callback) => {
    check.assert.array(nextState, 'State value must be an array')

    this.props.onChange({ target: { value: nextState } })

    // "async" callback moved to top of call stack to ensure that `props.value` is updated before it runs
    if (check.function(callback)) {
      setTimeout(callback, 0)
    }
  }

  /**
   * Function to update the data for an upload. The state passed will be shallow merged.
   *
   * @param id {string|number}
   * @param state {{}}
   * @param callback {function=}
   * @return {void}
   */
  updateUpload = (id, state, callback) => {
    const index = this.findUploadIndex(id)

    if (index !== -1) {
      const nextState = [...this.props.value]
      nextState[index] = Object.assign(nextState[index], state)
      this.updateState(nextState, callback)
    } else {
      console.warn('Upload not found.')
    }
  }

  /**
   * Function to update the `uploadState` of an upload
   *
   * @param id {string|number}
   * @param uploadState {uploadStates}
   * @return {void}
   */
  updateUploadState = (id, uploadState) => {
    this.updateUpload(id, { uploadState })
  }

  /**
   * Function to update the progress of an upload
   *
   * @param id {string|number}
   * @returns {Function}
   */
  handleUploadProgress = id => progress => {
    this.updateUpload(id, { progress })
  }

  /**
   * Function that updates the `uploadState` of an upload to `succeeded`
   *
   * @param file {*}
   */
  handleUploadSuccess = file => {
    const { delayUntilComplete } = this.props

    this.updateUploadState(file.id, uploadStates.succeeded)

    // after `delayUntilComplete` ms, mark the upload as complete
    setTimeout(() => {
      // In case we are receiving new data from the server, check for valid data
      const uploadedItem = transformFile(file)

      // Mark the upload as complete by removing the `progress and `uploadState
      this.updateUpload(uploadedItem.id, { progress: undefined, uploadState: undefined })

    }, delayUntilComplete)
  }

  /**
   * Function that updates the `uploadState` of an upload to `succeeded`
   *
   * @param file {*}
   */
  handleUploadError = file => {
    this.updateUploadState(file.id, uploadStates.failed)

    // check queue for additional uploads
    this.handleQueueing()
  }

  /**
   * Handles the processing stage of upload if a `processFile` prop was passed
   *
   * @param result
   * @returns {Promise<void>}
   */
  handleProcessing = async result => {
    const { processFile } = this.props
    const { updateUploadState } = this

    // if a `processFile` prop wasn't passed we skip this whole thing
    if (check.not.function(processFile)) {
      return result
    }

    // show processing state
    updateUploadState(result.id, uploadStates.processing)

    // call the `processFile` function and capture the result
    const newData = await processFile(result)

    // return the result of `processFile` or the original data if it didn't return anything
    return check.assigned(newData) ? newData : result
  }

  /**
   * Handles upload and upload failure logic
   *
   * @param func {function} function that handles the uploading, should return a promise
   * @param file {*}
   */
  handleUpload = async (func, file) => {
    const { handleUploadError, handleUploadSuccess } = this

    this.updateUploadState(file.id, uploadStates.uploading)

    try {

      /**
       * @type {*|undefined}
       */
      const uploadResult = await func(file)

      if (uploadResult) {
        Object.assign(file, uploadResult)
      }

      /**
       * @type {*|undefined}
       */
      const processResult = await this.handleProcessing(file)

      if (processResult) {
        Object.assign(file, processResult)
      }

      // update the file data
      this.updateUpload(file.id, file)

      handleUploadSuccess(file)

      // check queue for additional uploads
      this.handleQueueing()
    } catch (ex) {
      console.error(ex)
      handleUploadError(file)
    }
  }

  startUploads = (items) => {
    const { handleUploadProgress } = this

    items.forEach(upload => {
      // bind the onProgress function
      const onDrop = this.props.onDrop({
        onProgress: handleUploadProgress(upload.id),
        extendData: (data, callback) => this.updateUpload(upload.id, data, callback)
      })

      return this.handleUpload(onDrop, upload)
    })
  }

  /**
   * Function that gets called to initiate file upload
   *
   * @param acceptedItems {File[]|File}
   * @param rejectedItems {File[]|File}
   */
  handleDrop = (acceptedItems, rejectedItems) => {
    const { maxUploads } = this.props
    const { handleUploadProgress } = this

    const acceptedItemsArray = toArray(acceptedItems).map(file => transformFile(
      file,
      uploadStates.queued
    ))

    const rejectedItemsArray = toArray(rejectedItems).map(file => transformFile(
      file,
      uploadStates.failed
    ))

    const nextState = [...this.props.value, ...acceptedItemsArray, ...rejectedItemsArray]

    // add the dropped files into the local `uploads` state array
    this.updateState(nextState, () => {

      this.startUploads(
        acceptedItemsArray.slice(
          0,
          maxUploads
        )
      )

      // display rejected files
      rejectedItemsArray.forEach(item => {
        this.updateUploadState(item.id, uploadStates.failed)
      })
    })
  }

  /**
   * Starts any uploads that are waiting in the queue
   */
  handleQueueing = () => {
    const { maxUploads } = this.props

    /**
     * A count of uploads that are in progress
     *
     * @type {number}
     */
    const currentlyUploading = this.props.value
      .filter((upload) => [uploadStates.uploading, uploadStates.processing].includes(upload.uploadState))
      .length

    /**
     * Number of available upload slots
     *
     * @type {number}
     */
    const availableUploadSlots = Math.max(maxUploads - currentlyUploading, 0)

    /**
     * The uploads that are up next if any
     *
     * @type {*[]}
     */
    const nextUploads = this.props.value
      .filter((upload) => upload.uploadState === uploadStates.queued)
      .slice(0, availableUploadSlots)

    if (nextUploads.length > 0) {
      this.startUploads(nextUploads)
    }
  }

  /**
   * Handles the upload retrying logic
   *
   * @param file {*}
   * @param event {React.SyntheticEvent=}
   * @returns {function}
   */
  handleRetry = async (file, event) => {
    const { retryUpload } = this.props

    preventFormSubmit(event)

    this.updateUploadState(file.id, uploadStates.uploading)

    return this.handleUpload(retryUpload, file)
  }

  /**
   * Calls the onCancel prop
   *
   * @param file {*}
   * @param event {React.SyntheticEvent=}
   * @returns {function(): Promise}
   */
  handleCancel = async (file, event) => {
    const { onCancel } = this.props

    preventFormSubmit(event)

    try {
      await onCancel(file)
      this.removeUpload(file)
    } catch (ex) {
      console.error(ex)
    }
  }

  /**
   * Handles deleting of file
   *
   * @param file
   * @param event {React.SyntheticEvent=}
   * @returns {Promise<void>}
   */
  handleDelete = async (file, event) => {
    try {
      preventFormSubmit(event)
      await this.props.onDelete(file)
      this.removeUpload(file)
    } catch (ex) {
      console.error(ex)
    }
  }

  /**
   * Renders the already uploaded items coming from `this.props.value`
   *
   * @returns {React.Element[]}
   */
  renderItems = () => this.props.renderItems(
    this.props.value.map((file) => transformFile(file))
  )

  /**
   * Determines if the drop zone is shown or not. Keep in mind it disabled and showing in some cases.
   *
   * @param hasItems {boolean}
   * @return {boolean}
   */
  shouldShowDropZone = (hasItems) => {
    const { readOnly, multiple } = this.props

    if (readOnly) {
      return !hasItems
    } else {
      return multiple || !hasItems
    }
  }

  render () {
    const {
      value,
      readOnly,
      emptyText,
      uploadText,
      onChange,
      onDelete, // omit
      onDrop, // omit
      ...rest
    } = this.props

    /**
     * Indicates whether there are files already uploaded and in the db
     *
     * @type {boolean}
     */
    const hasItems = check.nonEmptyArray(value)

    /**
     * Shows the drop zone in all cases except when the component is constrained to a single file
     * and there is already a file uploaded
     *
     * @type {boolean}
     */
    const showDropZone = this.shouldShowDropZone(hasItems)

    /**
     * The text that is displayed in the drop zone
     *
     * @type {string}
     */
    const dropZoneText = !readOnly || hasItems
      ? uploadText
      : emptyText

    /**
     * Will contain the rendered items and uploads, if there are any. Otherwise it'll return false and
     * nothing will be rendered
     *
     * @type {React.Element[]|false}
     */
    const List = hasItems && this.renderItems()

    return (
      <FileContext.Provider
        value={{
          onDelete: this.handleDelete,
          onCancel: this.handleCancel,
          onRetry: this.handleRetry,
          removeUpload: this.removeUpload,
          readOnly
        }}
      >
        <StyleWrapper {...rest}>
          {List}

          {showDropZone && (
            <DropZone
              {...rest}
              onDrop={this.handleDrop}
              disabled={readOnly}
            >
              {({ getInputProps, isDragActive, getRootProps }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={classNames('dropzone', {
                      'dropzone--isActive': isDragActive
                    })}
                  >
                    <input {...getInputProps()} />
                    <p>{dropZoneText}</p>
                  </div>
                )
              }}
            </DropZone>
          )}
        </StyleWrapper>
      </FileContext.Provider>
    )
  }

}

FileComponent.propTypes = {
  processFile: PropTypes.func,
  renderItems: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  uploadText: PropTypes.string,
  emptyText: PropTypes.string,
  onDrop: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  retryUpload: PropTypes.func.isRequired,
  delayUntilComplete: PropTypes.number
}

FileComponent.defaultProps = {
  processFile: undefined,
  multiple: true,
  uploadText: 'Upload a file',
  emptyText: 'No files',
  delayUntilComplete: 3000,
  maxUploads: 3
}

export const File = withValue('array', withEditable(FileComponent))
