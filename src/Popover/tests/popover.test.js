import 'jest-styled-components'
import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import { Popover } from '../index'
import { POSITIONS } from '../util'

// NOTE: since we are not using enzyme or react-testing-library we
// are not simulating / testing the click or esc key events

test('Popover renders', () => {
  const component = renderer
    .create(
      <Popover
        isShown
        render={() => (
          <div>
            <p>Popover content</p>
          </div>
        )}
      >
        <button>Regular Popover</button>
      </Popover>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Supports default visibility via isShown prop', () => {
  const component = renderer
    .create(
      <Popover
        isShown
        render={() => (
          <div>
            <p>Popover content</p>
          </div>
        )}
      >
        <button>Regular Popover</button>
      </Popover>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Supports function as a child', () => {
  const component = renderer
    .create(
      <Popover
        isShown
        render={() => (
          <div>
            <p>Popover content</p>
          </div>
        )}
      >
        {({ ref, toggle }) => (
          <button ref={ref} onClick={toggle}>
            Regular Popover
          </button>
        )}
      </Popover>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Supports nested Popovers', () => {
  const component = renderer
    .create(
      <Popover
        isShown
        render={() => (
          <div>
            <p>Popover content</p>
            <Popover
              isShown
              render={() => (
                <div>
                  <p>Popover content</p>
                </div>
              )}
            >
              <button>Regular Popover</button>
            </Popover>
          </div>
        )}
      >
        <button>Nested Popover</button>
      </Popover>
    )
    .toJSON()

  expect(component).toMatchSnapshot()
})

test('Supports different positions', () => {
  const positions = Object.values(POSITIONS)

  positions.forEach(pos => {
    const component = renderer
      .create(
        <Popover
          isShown
          position={pos}
          render={() => (
            <div>
              <p>Popover content</p>
            </div>
          )}
        >
          <button>Regular Popover</button>
        </Popover>
      )
      .toJSON()

    // NOTE: to test inner content like this we would need to use something
    // like enzyme or react-testing-library as jest-styled-components only
    // checks the root element of a rendered tree.
    // REF: https://github.com/styled-components/jest-styled-components#tohavestylerule

    // const positionStyles = getPositions({ position: pos })
    // const positionStyleKeys = Object.keys(positionStyles)

    // positionStyleKeys.forEach(styleProp => {
    //   expect(component).toHaveStyleRule(styleProp, positionStyles[styleProp])
    // })

    expect(component).toMatchSnapshot()
  })
})
