import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane } from 'Pane'
import { Toaster, ToasterManager } from '/'

const successToast = { message: 'Success toast' }

const dangerToast = { message: 'Danger toast' }

const defaultToast = { message: 'Default toast' }

const uniqueToast = {
  id: 'unique-id',
  message: 'This toast will only appear once.'
}

const customAction = {
  id: 'custom-action',
  message: 'Pressing "Alert!" will do a custom action',
  actionLabel: 'Close?',
  onAction: ({ close }) => {
    if (confirm('Close the alert')) {
      close()
    }
  }
}

storiesOf('Toaster', module).add('Examples', () => (
  <Pane p={4}>
    <Pane mb={1}>
      <button onClick={() => Toaster.success(successToast)}>
        Success toast
      </button>
    </Pane>

    <Pane mb={1}>
      <button onClick={() => Toaster.danger(dangerToast)}>Danger toast</button>
    </Pane>

    <Pane mb={1}>
      <button onClick={() => Toaster.notify(defaultToast)}>
        Default toast
      </button>
    </Pane>

    <Pane mb={1}>
      <button onClick={() => Toaster.notify(uniqueToast)}>Unique toast</button>
    </Pane>

    <Pane mb={1}>
      <button onClick={() => Toaster.notify(customAction)}>
        Custom action toast
      </button>
    </Pane>

    <ToasterManager />
  </Pane>
))
