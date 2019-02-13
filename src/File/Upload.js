import React from 'react'
import styled from 'styled-components'
import check from 'check-types'

import { themeGet } from '../defaultTheme'
import { FileContext } from './FileContext'
import { ProgressBar } from 'ProgressBar'
import { Flex } from 'FlexBox'
import { Text } from 'Text'
import { uploadStates } from './uploadStates'

/**
 * Used to scale icons from the theme icon size [2]
 *
 * @type {number}
 */
export const iconMultiplier = 1.125

/**
 * Used to scale the larger icons found in this component
 *
 * @type {number}
 */
export const iconMultiplierLarge = 1.2

/**
 * Some of the icons are 18px in this component, which is not common elsewhere
 * as an alternative to adding another icon size to the theme, here we just
 * scale up a theme icon size.
 */
const ScaledProgressBarIcon = styled(ProgressBar.Icon).attrs(
  ({ scale = iconMultiplier }) => ({
    transform: `scale(${scale}, ${scale})`
  })
)``

const StyledProgressBar = ({ text, children, ...props }) => {
  return (
    <StyledUpload>
      <ProgressBar.Text mb='1px'>{text}</ProgressBar.Text>
      <ProgressBar animated {...props}>
        {children}
      </ProgressBar>
    </StyledUpload>
  )
}

/**
 * This styled component is used to uploads in all states. It exists and is exported primarily so variants can
 * apply styling to all of the uploads.
 */
export const StyledUpload = styled(Flex)`
  flex-direction: column;
  min-height: 45px;
  margin: 0 0 ${themeGet('space.1')} 0;
`

export const Upload = (props) => {
  return (
    <FileContext.Consumer>
      {(context) => {
        const { onCancel, onRetry } = context
        const { id, progress, filename, uploadState } = props
        const key = `upload--${id}-${uploadState}`

        switch (uploadState) {
          case uploadStates.uploading:
          default:
            return (
              <StyledProgressBar text={filename} key={key} progress={check.number(progress) ? progress : 0}>
                <ScaledProgressBarIcon
                  icon='cancel'
                  onClick={(event) => onCancel(props, event)}
                />
              </StyledProgressBar>
            )

          case uploadStates.queued:
            return (
              <StyledProgressBar
                text={`${filename} - Queued`}
                key={key}
                progress={0}
                variant='solid'
                style={{ opacity: 0.7 }}
              >
                <ScaledProgressBarIcon
                  icon='cancel'
                  onClick={(event) => onCancel(props, event)}
                />
              </StyledProgressBar>
            )

          case uploadStates.failed:
            return (
              <StyledUpload key={key}>
                <Flex
                  justifyContent='space-between'
                  justifyItems='center'
                  alignItems='center'
                >
                  <ProgressBar.Text key={key}>
                    {filename} -{' '}
                    <Text as='span' color='danger'>
                      Upload failed
                    </Text>
                  </ProgressBar.Text>
                  <Flex justifyItems='center' alignItems='center'>
                    <ScaledProgressBarIcon
                      scale={iconMultiplierLarge}
                      icon='refresh'
                      onClick={(event) => onRetry(props, event)}
                    />
                    <ScaledProgressBarIcon
                      icon='cancel'
                      onClick={(event) => onCancel(props, event)}
                    />
                  </Flex>
                </Flex>
              </StyledUpload>
            )

          case uploadStates.succeeded:
            return (
              <StyledProgressBar
                variant='success'
                text={`${filename} - Complete`}
                progress={100}
                key={key}
              >
                <ScaledProgressBarIcon color='success' icon='check_circle' />
              </StyledProgressBar>
            )

          case uploadStates.processing:
            return (
              <StyledProgressBar
                variant='processing'
                text={`${filename} - Processing`}
                progress={100}
                key={key}
              >
                <ScaledProgressBarIcon icon='empty' />
              </StyledProgressBar>
            )
        }

      }}
    </FileContext.Consumer>
  )
}

Upload.uploadStates = uploadStates
