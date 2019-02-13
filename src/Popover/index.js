import React, { PureComponent, memo } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Pane } from 'Pane'
import { Stack } from 'Stack'
import { getPositions, POSITIONS } from './util'

const PopoverContainer = memo(styled(Pane)`
  position: relative;
`)

const PopoverRenderer = memo(styled(Pane)`
  position: absolute;
  ${getPositions};
`)

export class Popover extends PureComponent {

  popoverNode = React.createRef()

  targetNode = React.createRef()

  state = { isShown: this.props.isShown || false }

  componentDidMount () {
    const { isShown } = this.state

    if (isShown) {
      this.addEventListeners()
    }
  }

  componentWillUnmount () {
    this.removeListeners()
  }

  addEventListeners = () => {
    document.body.addEventListener('click', this.onBodyClick, false)
    document.body.addEventListener('keydown', this.onEscKey, false)
  }

  removeListeners = () => {
    document.body.removeEventListener('click', this.onBodyClick, false)
    document.body.removeEventListener('keydown', this.onEscKey, false)
  }

  onBodyClick = e => {
    if (this.targetNode && this.targetNode.current.contains(e.target)) {
      return
    }

    if (this.popoverNode && this.popoverNode.current.contains(e.target)) {
      return
    }

    this.close()
  }

  onEscKey = e => {
    if (e.keyCode !== 27) {
      return
    }

    this.close()
  }

  focusPopover = () => {
    if (this.popoverNode) {
      requestAnimationFrame(() => {
        const autoFocus = this.popoverNode.current.querySelector('[autofocus]')
        const tabIndex = this.popoverNode.current.querySelector('[tabindex]')
        const menuItems = this.popoverNode.current.querySelectorAll(
          '[role="menuitem"]'
        )

        if (autoFocus) autoFocus.focus()
        if (tabIndex) tabIndex.focus()
        if (menuItems.length > 0) menuItems[0].focus()
      })
    }
  }

  focusTarget = () => {
    if (this.targetNode) {
      requestAnimationFrame(() => {
        this.targetNode.current.focus()
      })
    }
  }

  toggle = () => {
    const { isShown } = this.state

    if (isShown) {
      this.close()
    } else {
      this.open()
    }
  }

  open = () => {
    const { isShown } = this.state

    if (isShown) {
      return
    }

    this.setState({ isShown: true })
    this.addEventListeners()
    this.focusPopover()
  }

  close = () => {
    const { isShown } = this.state

    if (!isShown) {
      return
    }

    this.setState({ isShown: false })
    this.removeListeners()
    this.focusTarget()
  }

  renderTarget = () => {
    const { children } = this.props

    // We support more complex children scenarios via child as a function
    // NOTE: assigning ref is required to handle body click events and esc key correctly
    /**
     * Example:

    <Popover
      render={...}
    >
      {({ toggle, ref }) => (
        <button onClick={toggle} ref={ref}>
          Toggle Popover
        </button>
      )}
    </Popover>

     */
    if (typeof children === 'function') {
      return children({
        toggle: this.toggle,
        ref: this.targetNode
      })
    }

    // If a child function is not provided we simply clone
    // our first child and attach our ref and handler to it
    return React.cloneElement(children, {
      ref: this.targetNode,
      onClick: this.toggle
    })
  }

  render () {
    const { position, render, ...rest } = this.props
    const { isShown } = this.state

    return (
      <Stack>
        {zIndex => (
          <PopoverContainer ref={this.popoverNode} {...rest}>
            {this.renderTarget()}

            {isShown && (
              <PopoverRenderer zIndex={zIndex} position={position} {...rest}>
                {render({ close: this.close })}
              </PopoverRenderer>
            )}
          </PopoverContainer>
        )}
      </Stack>
    )
  }

}

Popover.propTypes = {
  position: propTypes.oneOf(Object.values(POSITIONS)).isRequired
}

Popover.defaultProps = {
  position: POSITIONS.BOTTOM_LEFT
}
