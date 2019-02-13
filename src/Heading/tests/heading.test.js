import 'jest-styled-components'
import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import { Heading, supportedElements } from '../index'
import { defaultTheme } from 'defaultTheme'

test('It renders without any props', () => {
  const component = renderer.create(<Heading />).toJSON()
  expect(component).toMatchSnapshot()
})

test('It supports h1-h6 elements', () => {
  supportedElements.forEach(element => {
    const component = renderer.create(<Heading as={element} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})

test('It should use font sizes from theme', () => {
  supportedElements.forEach((level, index) => {
    const component = renderer.create(<Heading as={level} />).toJSON()

    expect(component).toHaveStyleRule(
      'font-size',
      defaultTheme.headingSizes[index]
    )
  })
})
