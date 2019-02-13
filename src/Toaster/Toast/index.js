import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { Alert } from 'Alert'

export class Toast extends PureComponent {

  timer = null

  componentDidMount () {
    const { duration } = this.props

    this.timer = setTimeout(this.close, duration)
  }

  componentWillUnmount () {
    this.close()
  }

  close = () => {
    const { id, onClose } = this.props

    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined

      onClose(id)
    }
  }

  render () {
    const { duration, id, onAction, onClose, ...etc } = this.props

    const action = onAction ? () => onAction({ close: this.close }) : this.close

    return <Alert mt={3} elevation={4} onAction={action} {...etc} />
  }

}

Toast.propTypes = {
  duration: propTypes.number,
  id: propTypes.string.isRequired,
  onAction: propTypes.func,
  onClose: propTypes.func.isRequired
}

Toast.defaultProps = {
  duration: 5000,
  onAction: undefined
}
