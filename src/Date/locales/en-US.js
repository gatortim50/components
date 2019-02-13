import enUS from 'date-fns/locale/en-US'

export const enUsTransformer = ({ addTransformer }) => {
  addTransformer(enUS, 'localize.day', result => result[0])
  return enUS
}
