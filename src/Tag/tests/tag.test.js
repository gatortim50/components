import React from 'react'
import { containerRenderer as renderer } from 'utils/tests/containerRenderer'
import 'jest-styled-components'
import { Tag } from 'Tag'
import { defaultTheme } from 'defaultTheme'

const checkCommonTagStyles = tree => {
  expect(tree).toHaveStyleRule('font-size', '12px')
  expect(tree).toHaveStyleRule('letter-spacing', '0.4px')
  expect(tree).toHaveStyleRule('line-height', '16px')
  expect(tree).toHaveStyleRule('font-weight', '400')
  expect(tree).toHaveStyleRule('text-transform', 'uppercase')
  expect(tree).toHaveStyleRule('padding-left', '32px')
  expect(tree).toHaveStyleRule('padding-right', '32px')
  expect(tree).toHaveStyleRule('border', 'none')
  expect(tree).toHaveStyleRule('border-radius', 'calc(32px / 2)')
}

test('Tag variants have not changed', () => {
  const expectedVariants = ['default', 'light']

  expect(Object.keys(defaultTheme.tags)).toMatchSnapshot(expectedVariants)
})

test('Tag with undefined variant styles, matches default styles', () => {
  const tree = renderer.create(<Tag />).toJSON()
  const defaultTree = renderer.create(<Tag />).toJSON()

  expect(tree).toEqual(defaultTree)
})

test('Tag with default variant styles ', () => {
  const tree = renderer.create(<Tag variant='default' />).toJSON()

  checkCommonTagStyles(tree)
  expect(tree).toHaveStyleRule('color', '#ffffff')
  expect(tree).toHaveStyleRule('background', '#848187')
})

test('Tag with light variant styles', () => {
  const tree = renderer.create(<Tag variant='light' />).toJSON()

  checkCommonTagStyles(tree)
  expect(tree).toHaveStyleRule('color', '#000000')
  expect(tree).toHaveStyleRule('background', '#EAE9EB')
})
