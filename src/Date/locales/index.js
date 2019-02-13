import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { enUsTransformer } from './en-US'
import get from 'lodash/get'
import set from 'lodash/set'

const addTransformer = (object, path, transformer) => {
  const original = get(object, path)
  set(object, path, (...args) => transformer(original(...args)))
}

export const setupLocales = () => {
  registerLocale('en-US', enUsTransformer({ addTransformer }))
  setDefaultLocale('en-US')
}
