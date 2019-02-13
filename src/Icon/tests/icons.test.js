import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import 'jest-styled-components'
import { Icon } from 'Icon'
import { iconKeys } from 'Icon/icons'

test('Icon keys have not changed', () => {
  expect(iconKeys).toMatchSnapshot()
})

test('Placeholder is shown when no icon is provided', () => {
  const component = renderer.create(<Icon />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Icon width / height is modified by the size property', () => {
  const component = renderer.create(<Icon size='50px' />)

  let tree = component.toJSON()
  expect(tree).toHaveStyleRule('height', '50px')
  expect(tree).toHaveStyleRule('width', '50px')
})

test('Icon fill is modified by the color property', () => {
  const component = renderer.create(<Icon color='red' />)

  let tree = component.toJSON()
  expect(tree).toHaveStyleRule('fill', 'red')
})

iconKeys.forEach(icon => {
  test(`${icon} renders correctly`, () => {
    const component = renderer.create(<Icon icon={`${icon}`} />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
