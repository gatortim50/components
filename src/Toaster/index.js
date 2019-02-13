import mitt from 'mitt'
export { ToasterManager } from './Manager'

export const emitter = mitt()

const danger = props => {
  emitter.emit('notify', {
    ...props,
    variant: 'danger'
  })
}

const notify = props => {
  emitter.emit('notify', {
    ...props,
    variant: 'default'
  })
}

const success = props => {
  emitter.emit('notify', {
    ...props,
    variant: 'success'
  })
}

export const Toaster = {
  danger,
  notify,
  success
}
