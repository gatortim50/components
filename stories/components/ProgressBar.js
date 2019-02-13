import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProgressBar } from 'ProgressBar'
import { Heading } from 'Heading'
import { Pane } from 'Pane'
import { Flex } from 'FlexBox'
import random from 'lodash/random'

const timers = {}

const clearTimer = (id) => {
  if (timers[id]) {
    clearInterval(id)
  }
}

const createTimer = (id, handler, timeout) => {
  clearTimer(id)
  timers[id] = setInterval(handler, timeout)
}

class AutoIncremntingProgressBar extends React.Component {

  state = {
    progress: 0
  }

  componentDidMount () {
    const { variant, timeout } = this.props

    createTimer(
      variant,
      () => {
        const { progress } = this.state

        this.setState({
          progress: progress >= 100
            ? 0
            : progress + 1
        })
      },
      timeout
    )
  }

  componentWillUnmount () {
    clearTimer(this.props.id)
  }

  render () {
    return (<ProgressBar {...this.props} progress={this.state.progress} />)
  }

}

storiesOf('Progress Bar', module)
  .add('Variants', () => (
    <React.Fragment>
      <Pane p={2}>
        <Heading style={{ textAlign: 'center' }}>Small Variant</Heading>
        <AutoIncremntingProgressBar m={3} timeout={random(300, 1200, false)} />
        <AutoIncremntingProgressBar m={3} timeout={random(300, 1200, false)}>
          <ProgressBar.Text>Filename.jpg</ProgressBar.Text>
        </AutoIncremntingProgressBar>
      </Pane>
      <Pane p={2}>
        <Heading style={{ textAlign: 'center' }}>Large Variant</Heading>
        <AutoIncremntingProgressBar m={3} timeout={random(300, 1200, false)} />
        <AutoIncremntingProgressBar m={3} timeout={random(3000, 1200, false)}>
          <ProgressBar.Text>Filename.jpg</ProgressBar.Text>
        </AutoIncremntingProgressBar>
      </Pane>
    </React.Fragment>
  ))
