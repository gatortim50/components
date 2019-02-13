import 'jest-styled-components'
import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import { Text, supportedElements } from '../index'

test('It renders without any props', () => {
  const component = renderer.create(<Text />).toJSON()
  expect(component).toMatchSnapshot()
})

test('It supports font sizes', () => {
  const component = renderer.create(<Text fontSize={20} />).toJSON()
  expect(component).toHaveStyleRule('font-size', '20px')
})

test('It supports text elements', () => {
  supportedElements.forEach(element => {
    const component = renderer.create(<Text as={element} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
