import check from 'check-types'
import { themeGet } from 'defaultTheme'

const requireSvg = require.context('./svgIcons', true, /\.svg$/)

export const getIcon = key => {
  try {
    return requireSvg(`./${key}.svg`)
  } catch (ex) {
    console.warn(ex)
    return null
  }
}

export const iconKeys = requireSvg
  .keys()
  .map(key => key.replace('./', '').replace('.svg', ''))

const iconPropType = (props, propName) => {
  const value = props[propName]

  if (
    iconKeys.includes(value) ||
    check.string(themeGet(`icons.${value}`)(props))
  ) {
    return null
  }

  return new TypeError(`Invalid icon value: ${value}`)
}

export const propTypes = {
  icon: iconPropType
}
