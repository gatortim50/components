import { Component } from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'

let portalContainer

export class Portal extends Component {

  constructor (props) {
    super(props)

    this.el = document.createElement('div')

    // Ensure our portal node has been
    // created and inserted into the DOM
    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('portal-container', '')
      document.body.appendChild(portalContainer)
    }
  }

  componentDidMount () {
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount () {
    portalContainer.removeChild(this.el)
  }

  render () {
    const { children } = this.props

    return createPortal(children, this.el)
  }

}

Portal.propTypes = {
  children: propTypes.node.isRequired
}
