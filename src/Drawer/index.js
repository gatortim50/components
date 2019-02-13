import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pane } from 'Pane'
import { themeGet, variant } from 'defaultTheme'
import { Stack } from 'Stack'
import posed, { PoseGroup } from 'react-pose'

const overlayVariant = variant({
  key: 'overlays'
})

// Maybe use Portal
const Overlay = styled(Pane)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: none;
  @media (max-width: ${themeGet('breakpoints.2')}) {
    display: block;
  }

  ${overlayVariant};
`

// Drawer Styling
const drawerVariant = variant({
  key: 'drawers'
})

const AnimatedDrawer = posed(Pane)({
  enter: { x: 0, opacity: 1, transition: { ease: 'easeIn' } },
  exit: { x: '-100%', opacity: 0, transition: { ease: 'easeIn' } }
})

const StyledDrawer = styled(AnimatedDrawer)`
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  min-width: 350px;
  padding: 0 24px 16px 24px;
  overflow: scroll;
  display: ${props => (!props.mobile ? 'block' : 'none')};
  @media (max-width: ${themeGet('breakpoints.2')}) {
    display: ${props => (props.mobile ? 'block' : 'none')};
    padding: 0 24px 24px 24px;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    background-color: ${themeGet('colors.mobileDrawerGray')};
  }

  ${drawerVariant};
`

export const Drawer = ({ active, onOverlayClick, overlayVariant, ...rest }) => (
  <Stack>
    {zIndex => (
      <React.Fragment>
        <StyledDrawer key='desktop-menu' zIndex={zIndex} {...rest} />

        {active && (
          <Overlay
            key='overlay'
            onClick={onOverlayClick}
            variant={overlayVariant}
            zIndex={zIndex}
          />
        )}
        <PoseGroup>
          {active && (
            <StyledDrawer
              key='mobile-drawer'
              zIndex={zIndex}
              {...rest}
              mobile
            />
          )}
        </PoseGroup>
      </React.Fragment>
    )}
  </Stack>
)

Drawer.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onOverlayClick: PropTypes.func,
  overlayVariant: PropTypes.string,
  ...drawerVariant.propTypes
}

Drawer.defaultProps = {
  active: false,
  variant: 'default',
  onOverlayClick: () => {},
  overlayVariant: 'default',
  height: '100%',
  elevation: [2, 2, 2, 0],
  width: '312px'
}
