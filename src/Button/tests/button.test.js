import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import 'jest-styled-components'
import { Button } from 'Button'
import { defaultTheme } from 'defaultTheme'

// NOTE: to test inner content styles such as Icon color styles matching the
// text color, we would need to use something
// like enzyme or react-testing-library as jest-styled-components only
// checks the root element of a rendered tree.

const checkCommonButtonStyles = tree => {
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('font-size', '14px')
  expect(tree).toHaveStyleRule('letter-spacing', '1.25px')
  expect(tree).toHaveStyleRule('line-height', '16px')
  expect(tree).toHaveStyleRule('font-weight', '500')
  expect(tree).toHaveStyleRule('text-transform', 'uppercase')
  expect(tree).toHaveStyleRule('border', 'none')
  expect(tree).toHaveStyleRule('border-radius', 'calc(8px / 2)')
}

test('Button variants have not changed', () => {
  const expectedVariants = [
    'default',
    'primary',
    'secondary',
    'success',
    'successful',
    'danger',
    'dangerous',
    'gray',
    'dropdown',
    'none'
  ]

  expect(Object.keys(defaultTheme.buttons)).toEqual(expectedVariants)
})

test('Button with undefined variant styles, matches default styles', () => {
  const tree = renderer.create(<Button iconBefore='hashtag' />).toJSON()
  const defaultTree = renderer.create(<Button iconBefore='hashtag' />).toJSON()

  expect(tree).toEqual(defaultTree)
})

test('Button with default variant styles ', () => {
  const tree = renderer
    .create(<Button variant='default' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#01abff')
  expect(tree).toHaveStyleRule('background', 'rgba(1,1,1,0)')
  expect(tree).toHaveStyleRule('box-shadow', undefined)
})

test('Button with primary variant styles', () => {
  const tree = renderer
    .create(<Button variant='primary' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#ffffff')
  expect(tree).toHaveStyleRule('background', '#01abff')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(10,175,239,0.14), 0 2px 1px -1px rgba(10,175,239,0.12), 0 1px 3px 0 rgba(10,175,239,0.20)'
  )
})

test('Button with secondary variant styles', () => {
  const tree = renderer
    .create(<Button variant='secondary' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#01abff')
  expect(tree).toHaveStyleRule('background', '#FAFAFA')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(0,0,0,0.04), 0 2px 1px -1px rgba(0,0,0,0.04), 0 1px 3px 0 rgba(0,0,0,0.06)'
  )
})

test('Button with success variant styles', () => {
  const tree = renderer
    .create(<Button variant='success' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#ffffff')
  expect(tree).toHaveStyleRule('background', '#00A860')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(0,168,96,0.14), 0 2px 1px -1px rgba(0,168,96,0.12), 0 1px 3px 0 rgba(0,168,96,0.20)'
  )
})

test('Button with successful variant styles', () => {
  const tree = renderer
    .create(<Button variant='successful' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#00A860')
  expect(tree).toHaveStyleRule('background', '#FAFAFA')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(0,168,96,0.14), 0 2px 1px -1px rgba(0,168,96,0.12), 0 1px 3px 0 rgba(0,168,96,0.20)'
  )
})

test('Button with danger variant styles', () => {
  const tree = renderer
    .create(<Button variant='danger' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#ffffff')
  expect(tree).toHaveStyleRule('background', '#C6364E')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(176,0,32,0.14), 0 2px 1px -1px rgba(176,0,32,0.12), 0 1px 3px 0 rgba(176,0,32,0.20)'
  )
})

test('Button with dangerous variant styles', () => {
  const tree = renderer
    .create(<Button variant='dangerous' iconBefore='hashtag' />)
    .toJSON()

  checkCommonButtonStyles(tree)
  expect(tree).toHaveStyleRule('color', '#C6364E')
  expect(tree).toHaveStyleRule('background', '#FAFAFA')
  expect(tree).toHaveStyleRule(
    'box-shadow',
    '0 1px 1px 0 rgba(176,0,32,0.14), 0 2px 1px -1px rgba(176,0,32,0.12), 0 1px 3px 0 rgba(176,0,32,0.20)'
  )
})
