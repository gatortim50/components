import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pane } from 'Pane'
import { variant } from 'defaultTheme'
import { Stack } from 'Stack'

// Top App bar
const appBarVariant = variant({
  key: 'appBars'
})

const StyledAppBar = styled(Pane)`
  position: relative;
  ${appBarVariant};
`

// Background Bar Decoration
const bgBarVariant = variant({
  key: 'bgBars'
})

const BgBar = styled(Pane).attrs({
  bg: 'light'
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 160px;
  width: 100%;
  margin-top: 56px;
  z-index: 0;
  ${bgBarVariant};
`

export const AppBar = ({ bgBarVariant, children, ...rest }) => (
  <Stack>
    {zIndex => (
      <StyledAppBar zIndex={zIndex} {...rest}>
        {children}
        <BgBar variant={bgBarVariant} />
      </StyledAppBar>
    )}
  </Stack>
)

AppBar.propTypes = {
  children: PropTypes.node,
  bgBarVariant: PropTypes.string,
  ...appBarVariant.propTypes
}

AppBar.defaultProps = {
  bgBarVariant: 'default',
  variant: 'default',
  height: '56px',
  px: 3,
  bg: 'dark'
}
