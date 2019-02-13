import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Container } from 'Container'
import { defaultTheme } from 'defaultTheme'

// Using a proxy we wrap the return of `react-test-renderer.create`
// This way, we can fetch the first children of the JSON tree
// Before being returned to be tested
const createProxy = createObject =>
  new Proxy(createObject, {
    get: (target, prop, receiver) => {
      if (prop === 'toJSON' && typeof target[prop] === 'function') {
        return new Proxy(target[prop], {
          apply (applyTarget, thisArg, args) {
            // Fetch the children[0]
            return Reflect.apply(applyTarget, thisArg, args).children[0]
          }
        })
      }
      return Reflect.get(target, prop, receiver)
    }
  })

// Using a proxy we wrap the `react-test-renderer`
// To force it to wrap the args to the `create` method within
// a Container object
// We then return a Proxy to the return of the `create` method
export const containerRenderer = new Proxy(renderer, {
  get: (target, prop, receiver) => {
    if (typeof target[prop] === 'function') {
      return new Proxy(target[prop], {
        apply (applyTarget, thisArg, args) {
          if (prop === 'create') {
            // Wrap the argument with a Container
            args[0] = <Container theme={defaultTheme}>{args[0]}</Container>
            return createProxy(Reflect.apply(applyTarget, thisArg, args))
          }
        }
      })
    }

    return Reflect.get(target, prop, receiver)
  }
})
