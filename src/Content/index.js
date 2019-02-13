import React from 'react'
import { Pane } from 'Pane'
import { Stack } from 'Stack'

export const Content = props => (
  <Stack>
    {zIndex => (
      <Pane
        width='100%'
        px={3}
        pb={3}
        pt={[3, 3, 6]}
        zIndex={zIndex}
        {...props}
      />
    )}
  </Stack>
)
