import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Portal } from 'Portal'
import { Toast } from '../Toast'
import { emitter } from '../index'
import { themeGet } from 'defaultTheme'

const Container = styled.div`
  position: fixed;
  bottom: ${themeGet('space.3')};
  right: ${themeGet('space.3')};
  width: 75%;
`

export class ToasterManager extends PureComponent {

  counter = 0

  state = { toasts: [] }

  componentDidMount () {
    emitter.on('notify', this.create)
  }

  componentWillUnmount () {
    emitter.off('notify', this.create)
  }

  closeAll = () => {
    const { toasts } = this.state

    toasts.forEach(toast => toast.close())
  }

  create = toastProps => {
    let nextId

    if (toastProps.id) {
      this.remove(toastProps.id)
      nextId = toastProps.id
    } else {
      nextId = this.counter++
    }

    const toast = {
      id: `Toast-${nextId}`,
      ...toastProps
    }

    this.setState(prev => ({
      toasts: [toast, ...prev.toasts]
    }))
  }

  remove = id => {
    this.setState(prev => ({
      toasts: prev.toasts.filter(toast => toast.id !== id)
    }))
  }

  render () {
    const { toasts } = this.state

    return (
      <Portal>
        <Container>
          {toasts.map(toast => {
            return <Toast key={toast.id} onClose={this.remove} {...toast} />
          })}
        </Container>
      </Portal>
    )
  }

}
