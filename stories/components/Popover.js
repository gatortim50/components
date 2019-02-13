import React from 'react'
import { storiesOf } from '@storybook/react'
import { Popover } from 'Popover'
import { Pane } from 'Pane'
import { Flex, Box } from 'FlexBox'
import { POSITIONS } from 'Popover/util'

const positions = Object.values(POSITIONS).sort()

storiesOf('Popover', module)
  .add('Example', () => {
    return (
      <Pane style={{ width: '100vw', height: '100vh' }} p={4}>
        <Pane mb={2}>
          <Popover
            render={({ close }) => (
              <Pane p={2} elevation={4} width={200} bg='white'>
                <button onClick={close}>&times;</button>
                <h3>Popover content!</h3>
              </Pane>
            )}
          >
            <button>Regular Popover</button>
          </Popover>
        </Pane>

        <Popover
          render={({ close }) => (
            <Pane p={2} elevation={4} width={200} bg='white'>
              <button onClick={close}>&times;</button>
              <h3>Popover content!</h3>

              <Popover
                render={({ close }) => (
                  <Pane p={2} elevation={4} width={200} bg='white'>
                    <button onClick={close}>&times;</button>
                    <h3>Popover content!</h3>
                  </Pane>
                )}
              >
                <button>Regular Popover</button>
              </Popover>
            </Pane>
          )}
        >
          <button>Nested Popover</button>
        </Popover>
      </Pane>
    )
  })
  .add('Positions', () => {
    return (
      <Pane style={{ width: '100vw', height: '100vh' }} p={4}>
        <Flex>
          {positions.map(position => {
            return (
              <Box m={4} key={position}>
                <Popover
                  position={position}
                  render={({ close }) => (
                    <Pane p={2} elevation={4} width={200} bg='white' />
                  )}
                >
                  <button>{position}</button>
                </Popover>
              </Box>
            )
          })}
        </Flex>
      </Pane>
    )
  })
  .add('Open state via prop', () => {
    return (
      <Pane style={{ width: '100vw', height: '100vh' }} p={4}>
        <Popover
          isShown
          render={({ close }) => (
            <Pane p={2} elevation={4} width={200} bg='white'>
              <button onClick={close}>&times;</button>
              <h3>Popover content!</h3>

              <Popover
                isShown
                render={({ close }) => (
                  <Pane p={2} elevation={4} width={200} bg='white'>
                    <button onClick={close}>&times;</button>
                    <h3>Popover content!</h3>
                  </Pane>
                )}
              >
                <button>Regular Popover</button>
              </Popover>
            </Pane>
          )}
        >
          <button>Nested Popover</button>
        </Popover>
      </Pane>
    )
  })
  .add('Functional children', () => {
    return (
      <Pane style={{ width: '100vw', height: '100vh' }} p={4}>
        <Popover
          render={({ close }) => (
            <Pane p={2} elevation={4} width={200} bg='white'>
              <button onClick={close}>&times;</button>
              <h3>Popover content!</h3>
            </Pane>
          )}
        >
          {({ toggle, ref }) => (
            <Pane>
              <p>This text will not trigger the Popover</p>
              <button onClick={toggle} ref={ref}>
                Toggle Popover
              </button>
            </Pane>
          )}
        </Popover>
      </Pane>
    )
  })
