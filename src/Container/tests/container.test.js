import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { defaultTheme } from 'defaultTheme'
import { Container } from '../index'

test('Container has medable-ui classname correctly', () => {
  const component = renderer.create(
    <Container theme={defaultTheme}>Children</Container>
  )

  let tree = component.toJSON()
  expect(tree.props.className).toContain('medable-ui')
})

test('Container renders correctly', () => {
  const component = renderer.create(
    <Container theme={defaultTheme}>Children</Container>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
