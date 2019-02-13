import 'jest-styled-components'
import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import { Pane } from '../index'
import { defaultTheme } from 'defaultTheme'

const { elevations } = defaultTheme

/**
 * NOTE: we only need to test non styled-system functionality as
 * styled-system itself is already tested so it would be redundant
 * to check things such as correct margin values in the presence
 * of a mb={1} property.
 */

test('Pane renders', () => {
  const component = renderer.create(<Pane />).toJSON()
  expect(component).toMatchSnapshot()
})

test('Pane elevation levels', () => {
  const e0 = renderer.create(<Pane />).toJSON()
  const e1 = renderer.create(<Pane elevation={1} />).toJSON()
  const e2 = renderer.create(<Pane elevation={2} />).toJSON()
  const e3 = renderer.create(<Pane elevation={3} />).toJSON()
  const e4 = renderer.create(<Pane elevation={4} />).toJSON()

  expect(e0).toHaveStyleRule('box-shadow', elevations[0])
  expect(e0).toMatchSnapshot()

  expect(e1).toHaveStyleRule('box-shadow', elevations[1])
  expect(e1).toMatchSnapshot()

  expect(e2).toHaveStyleRule('box-shadow', elevations[2])
  expect(e2).toMatchSnapshot()

  expect(e3).toHaveStyleRule('box-shadow', elevations[3])
  expect(e3).toMatchSnapshot()

  expect(e4).toHaveStyleRule('box-shadow', elevations[4])
  expect(e4).toMatchSnapshot()
})
