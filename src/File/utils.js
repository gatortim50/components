import { mimeTypes } from './mime-types'
import check from 'check-types'
import uniqueId from 'lodash/uniqueId'

/**
 * Generates a unique id
 *
 * @returns {string}
 */
export const generateId = () => uniqueId('File-Component_')

/**
 * @param data
 * @returns {String}
 */
const getMimeType = (data) => {
  if (check.nonEmptyString(data.mime)) {
    return data.mime
  }

  // if mime type is not defined
  if (data.type) {
    data.mime = data.type
    delete data.type
    return data.mime
  }

  return mimeTypes.default
}

/**
 * @param data {object|File}
 * @param uploadState {uploadStates=}
 * @returns {*}
 */
export const transformFile = (data, uploadState) => {

  /**
   * @type {String}
   */
  data.mime = getMimeType(data)

  if (!data.filename && data.name) {
    data.filename = data.name
    delete data.name
  }

  // adds preview when no path is found
  if (!data.path) {
    data.path = URL.createObjectURL(data)
  }

  /**
   * @type {string}
   */
  data.id = check.nonEmptyString(data.id) ? data.id : generateId()

  /**
   * {@type {uploadStates|undefined}}
   */
  if (uploadState) {
    data.uploadState = uploadState
  }

  // check that all required properties are passed
  check.assert.assigned(data, 'A data argument is required.')
  check.assert.nonEmptyString(data.id, 'A file id is required.')
  check.assert.nonEmptyString(data.path, 'A file path is required.')
  check.assert.nonEmptyString(data.filename, 'A filename is required.')
  check.assert.nonEmptyString(data.mime, 'A file mime type is required.')

  return data
}
