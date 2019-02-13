import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mergeWithDefaultTheme } from 'defaultTheme'
import { Box } from 'FlexBox'

// Component that sets the `.medable-ui` class name,
// required to allow style namespacing used to reduce clashes with outside classNames
// This value is set in `.babelrc` file
// There should be one Container component defined in the application
// Also takes care of merging the provided theme(if any) with the default theme
// Used by all underlying components, to make sure that all required values are set
export const Container = ({ children }) => (
  <ThemeProvider theme={mergeWithDefaultTheme}>
    <Box m='auto' className='medable-ui'>
      {children}
    </Box>
  </ThemeProvider>
)
