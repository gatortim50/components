import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Stack } from 'Stack'

storiesOf('Stack', module).add('Example', () => {
  return (
    <Pane p={4}>
      <Stack>
        {zIndex => (
          <Fragment>
            <Pane zIndex={zIndex} elevation={zIndex / 10} p={1} mb={3}>
              <p>z-index = {zIndex}</p>
            </Pane>
            <Stack>
              {zIndex => (
                <Fragment>
                  <Pane zIndex={zIndex / 10} elevation={2} p={1} mb={3}>
                    <p>z-index = {zIndex}</p>
                  </Pane>
                  <Stack>
                    {zIndex => (
                      <Fragment>
                        <Pane zIndex={zIndex / 10} elevation={3} p={1} mb={3}>
                          <p>z-index = {zIndex}</p>
                        </Pane>
                        <Stack>
                          {zIndex => (
                            <Pane zIndex={zIndex / 10} elevation={4} p={1}>
                              <p>z-index = {zIndex}</p>
                            </Pane>
                          )}
                        </Stack>
                      </Fragment>
                    )}
                  </Stack>
                </Fragment>
              )}
            </Stack>
          </Fragment>
        )}
      </Stack>
    </Pane>
  )
})
