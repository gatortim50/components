/**
 * The possible states that an upload can be in
 *
 * @type {{processing: string, uploading: string, failed: string, succeeded: string}}
 */
export const uploadStates = {
  queued: 'queued',
  uploading: 'uploading',
  failed: 'failed',
  succeeded: 'succeeded',
  processing: 'processing'
}
