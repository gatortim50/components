import deepmerge from 'deepmerge'
import check from 'check-types'
import { propTypes } from 'styled-system'

// Provides default theme values
export const defaultTheme = {
  name: 'default',

  // Layout Settings
  breakpoints: ['600px', '840px', '1284px'],
  pageWidths: ['360px', '600px', '1080px', '1284px'],

  // Font Settings
  fonts: {
    sansSerif: '"HelveticaNeue", Arial, Helvetica, sans-serif',
    serif:
      'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif," "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
    'sans-serif':
      'system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    mono:
      'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
  },

  colors: {
    // Linked text color
    darkest: '#0079ff',
    // Primary header color
    darker: '#009cff',
    // Primary button background & Secondary button text color
    dark: '#01abff',
    // Secondary header color
    light: '#50bbff',
    // App switcher chip background & Active sideback background
    lighter: '#8acfff',
    // App icon background & Breadcrumb color
    lightest: '#e2f3ff',

    // Grays
    darkestGray: '#222222',
    darkerGray: '#625E66',
    darkGray: '#848187',
    lightGray: '#A6A3A9',
    lighterGray: '#C8C6CA',
    lightestGray: '#EAE9EB',

    // Additional Colors
    black: '#000000',
    white: '#ffffff',
    buttonWhite: '#FAFAFA',
    mobileDrawerGray: '#F7F7F8',
    success: '#00A860',
    danger: '#C6364E'
  },

  // Fonts
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '34px'],
  headingSizes: ['34px', '24px', '20px', '16px', '14px', '12px'],
  fontWeights: [
    '0', // Placeholder
    '100', // Thin
    '200', // Extra Light
    '300', // Light
    '400', // Normal
    '500', // Medium
    '600', // Semi Bold
    '700', // Bold
    '800', // Extra Bold
    '900' // Ultra Bold
  ],
  lineHeights: ['16px', '20px', '24px', '28px', '32px', '40px'],
  letterSpacings: ['0.25px', '0.4px', '0.5px', '1.25px'],

  // Spacing
  space: ['0px', '8px', '16px', '24px', '32px', '40px', '48px', '80px'],

  // Icon sizes
  iconSizes: ['0px', '8px', '16px', '24px', '32px', '40px', '48px'],

  radii: [0, '4px', '8px', '12px', '16px'],

  // Elevations
  elevations: [
    // Elevation [0]
    `0 0 0 rgba(0,0,0,0.12)`,
    // Elevation [1]
    `0 1px 1px 0 rgba(0,0,0,0.14),
     0 2px 1px -1px rgba(0,0,0,0.12),
     0 1px 3px 0 rgba(0,0,0,0.20)`,
    // Elevation [2]
    `0 1px 1px 0 rgba(0,0,0,0.14),
     0 2px 10px 0 rgba(0,0,0,0.18)`,
    // Elevation [3]
    `0 8px 10px 1px rgba(0,0,0,0.14),
     0 3px 14px 2px rgba(0,0,0,0.12),
     0 5px 5px -3px rgba(0,0,0,0.20)`,
    // Elevation [4]
    `0 0 1px rgba(0,0,0,0.12),0 16px 24px -8px rgba(0,0,0,0.2)`
  ],

  buttons: {
    default: props => ({
      color: themeGet('colors.dark')(props),
      background: 'rgba(1, 1, 1, 0)'
    }),
    primary: props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.dark')(props),
      'box-shadow': `0 1px 1px 0 rgba(10,175,239,0.14),
                     0 2px 1px -1px rgba(10,175,239,0.12),
                     0 1px 3px 0 rgba(10,175,239,0.20)`
    }),
    secondary: props => ({
      color: themeGet('colors.dark')(props),
      background: themeGet('colors.buttonWhite')(props),
      'box-shadow': `0 1px 1px 0 rgba(0,0,0,0.04),
                     0 2px 1px -1px rgba(0,0,0,0.04),
                     0 1px 3px 0 rgba(0,0,0,0.06)`
    }),
    success: props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.success')(props),
      'box-shadow': `0 1px 1px 0 rgba(0,168,96,0.14),
                     0 2px 1px -1px rgba(0,168,96,0.12),
                     0 1px 3px 0 rgba(0,168,96,0.20)`
    }),
    successful: props => ({
      color: themeGet('colors.success')(props),
      background: themeGet('colors.buttonWhite')(props),
      'box-shadow': `0 1px 1px 0 rgba(0,168,96,0.14),
                     0 2px 1px -1px rgba(0,168,96,0.12),
                     0 1px 3px 0 rgba(0,168,96,0.20)`
    }),
    danger: props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.danger')(props),
      'box-shadow': `0 1px 1px 0 rgba(176,0,32,0.14),
                     0 2px 1px -1px rgba(176,0,32,0.12),
                     0 1px 3px 0 rgba(176,0,32,0.20)`
    }),
    dangerous: props => ({
      color: themeGet('colors.danger')(props),
      background: themeGet('colors.buttonWhite')(props),
      'box-shadow': `0 1px 1px 0 rgba(176,0,32,0.14),
                     0 2px 1px -1px rgba(176,0,32,0.12),
                     0 1px 3px 0 rgba(176,0,32,0.20)`
    }),
    gray: props => ({
      color: themeGet('colors.darkerGray')(props),
      background: themeGet('colors.buttonWhite')(props),
      'box-shadow': `0 1px 1px 0 rgba(0,0,0,0.04),
                     0 2px 1px -1px rgba(0,0,0,0.04),
                     0 1px 3px 0 rgba(0,0,0,0.06)`
    }),
    dropdown: props => ({
      'text-transform': 'none',
      color: themeGet('colors.darkGray')(props),
      background: themeGet('colors.buttonWhite')(props),
      'box-shadow': `0 1px 1px 0 rgba(0,0,0,0.04),
                     0 2px 1px -1px rgba(0,0,0,0.04),
                     0 1px 3px 0 rgba(0,0,0,0.06)`,
      '&:disabled': {
        'box-shadow': 'none'
      }
    }),
    none: props => ({
      color: themeGet('colors.darkGray')(props)
    })
  },

  // Tag Variants
  tags: {
    default: props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.darkGray')(props)
    }),
    light: props => ({
      color: themeGet('colors.black')(props),
      background: themeGet('colors.lightestGray')(props)
    })
  },

  // App Picker Variants.  We use the app abbreviation as the variant
  apps: {
    default: props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.light')(props),
      '&.item': {
        color: '#000000',
        background: '#00000000'
      },
      '&.selected': {
        background: themeGet('colors.light')(props),
        color: themeGet('colors.white')(props)
      },
      '.abbr': {
        color: themeGet('colors.light')(props),
        background: themeGet('colors.lightest')(props)
      }
    }),
    ax: props => ({
      color: themeGet('colors.white')(props),
      background: '#309AE6',
      '&.item': {
        color: '#000000',
        background: '#00000000'
      },
      '&.selected': {
        background: '#309AE6',
        color: themeGet('colors.white')(props)
      },
      '.abbr': {
        color: '#309AE6',
        background: '#E2F5FF'
      }
    }),
    cx: props => ({
      color: themeGet('colors.white')(props),
      background: '#35ADB8',
      '&.item': {
        color: '#000000',
        background: '#00000000'
      },
      '&.selected': {
        background: '#35ADB8',
        color: themeGet('colors.white')(props)
      },
      '.abbr': {
        color: '#35ADB8',
        background: '#E1F7F8'
      }
    }),
    cb: props => ({
      color: themeGet('colors.white')(props),
      background: '#8E81B8',
      '&.item': {
        color: '#000000',
        background: '#00000000'
      },
      '&.selected': {
        background: '#8E81B8',
        color: themeGet('colors.white')(props)
      },
      '.abbr': {
        color: '#8E81B8',
        background: '#F4E7FF'
      }
    }),
    '+': props => ({
      color: themeGet('colors.white')(props),
      background: themeGet('colors.lightGray')(props),
      '&.item': {
        color: '#000000',
        background: '#00000000'
      },
      '&.selected': {
        background: themeGet('colors.lightGray')(props),
        color: themeGet('colors.white')(props)
      },
      '.abbr': {
        color: themeGet('colors.lightGray')(props),
        border: `2px dashed ${themeGet('colors.lightGray')(props)}`,
        'box-shadow': 'none',
        background: '#ffffff'
      }
    })
  },

  // Input variants
  inputs: {
    default: props => ({
      background: 'transparent',
      borderBottom:
        props.focused && props.hasErrors
          ? `2px solid ${themeGet('colors.danger')(props)}`
          : props.focused
            ? `2px solid ${themeGet('colors.light')(props)}`
            : '1px solid #A6A3A9',
      '> input': {
        lineHeight: themeGet('lineHeights.2')(props)
      }
    }),
    search: props => ({
      padding: '4px 3px 4px 13px',
      background: '#FAFAFA',
      border: props.focused
        ? '1px solid rgba(0,0,0,0.2)'
        : '1px solid rgba(0,0,0,0.12)',
      borderRadius: '32px',
      '> input': {
        lineHeight: themeGet('lineHeights.1')(props)
      },
      '> .before-icon': {
        position: 'relative',
        top: '2px',
        transform: 'scale(1.1)'
      },
      '> .after-icon': {
        transform: 'scale(.9)'
      }
    })
  },

  labels: {
    default: props => ({
      color:
        props.focused && props.hasErrors
          ? themeGet('colors.danger')(props)
          : props.focused
            ? themeGet('colors.light')(props)
            : themeGet('colors.darkGray')(props)
    })
  },

  labelIcons: {
    default: props => ({
      fill:
        props.focused && props.hasErrors
          ? themeGet('colors.danger')(props)
          : props.focused
            ? themeGet('colors.light')(props)
            : themeGet('colors.lighterGray')(props)
    })
  },

  links: {
    default: props => ({
      color: themeGet('colors.darkest')(props)
    })
  },

  assistiveTexts: {
    default: props => ({
      color: props.hasErrors
        ? themeGet('colors.danger')(props)
        : themeGet('colors.darkerGray')(props)
    })
  },

  checkboxes: {
    default: props => ({
      fill: themeGet('colors.lightestGray')(props),
      color: themeGet('colors.darkGray')(props),
      'border-style': 'dashed'
    }),
    'default-selected': props => ({
      fill: themeGet('colors.dark')(props),
      color: themeGet('colors.darkestGray')(props)
    }),
    minimal: props => ({
      fill: themeGet('colors.darkGray')(props),
      color: themeGet('colors.darkGray')(props),
      border: 'none'
    }),
    'minimal-selected': props => ({
      fill: themeGet('colors.dark')(props),
      color: themeGet('colors.darkestGray')(props),
      border: 'none'
    }),
    capsule: props => {
      if (!props.readOnly) {
        return themeGet('checkboxes.default')(props)
      }

      return {
        display: 'none'
      }
    },
    'capsule-selected': props => {
      if (!props.readOnly) {
        return themeGet('checkboxes.default-selected')(props)
      }

      return {
        'justify-content': 'center',
        padding: '0 20px 0 20px',
        color: themeGet('colors.white')(props),
        background: themeGet('colors.lightGray')(props),
        'text-transform': 'uppercase',
        '& svg': {
          display: 'none'
        }
      }
    }
  },

  progressBars: {
    default: props => {
      const backgroundColor = props.color || '#3EB5F8'
      const stripeColor = props.stripeColor || '#319AE6'

      return {
        height: '16px',
        '.ProgressBar__Bar': {
          '@keyframes progress-bar': {
            from: { backgroundPosition: '0 0' },
            to: { backgroundPosition: '40px 0' }
          },
          transition: 'width .6s ease',
          backgroundImage: `linear-gradient(
          -45deg,
          ${stripeColor} 25%,
          transparent 25%,
          transparent 50%,
          ${stripeColor} 50%,
          ${stripeColor} 75%,
          transparent 75%,
          transparent
        )`,
          animation: props.animated
            ? 'progress-bar 2s linear infinite'
            : 'none',
          backgroundSize: '40px 40px',
          backgroundColor: backgroundColor
        }
      }
    },
    solid: props => ({
      height: '14px',
      borderColor: props.borderColor || 'transparent',
      marginTop: '1px',
      marginBottom: '1px',
      '.ProgressBar__Bar': {
        backgroundColor: props.color || '#4CC346'
      }
    }),
    success: props =>
      themeGet('progressBars.solid')({
        ...props,
        borderColor: '#4CC346',
        color: '#4CC346'
      }),
    processing: props =>
      themeGet('progressBars.default')({
        ...props,
        stripeColor: '#FFFFFF',
        color: '#D9D8DB'
      })
  }
}

// Evaluates the target component if it is a function, and passes in the params
const fetch = (target, params) =>
  check.function(target) ? target(params) : target

// Finds the value of the object at the specified path
// If a function is received, it is passed the `props` and is evaluated
// Allows us to do something like 'themeGet(`buttons.${props.variant}.color`)'
// Where any part of the path can be a themeGet function.
// This way we can fetch theme values within the theme object
export const get = (obj, path, params) =>
  path
    .split('.')
    .reduce((a, b) => (a && a[b] ? fetch(a[b], params) : null), obj)

// Utility method to fetch default theme properties
// So that components can be used outside of a Container
export const themeGet = (path, fallback) => props => {
  return (
    get(props.theme, path, props) ||
    get(defaultTheme, path, props) ||
    fetch(fallback, props)
  )
}

// Utility method so that the theme key provided can be a function
// This allows overring the themeKey based on a property
export const variant = ({
  key = props => props.themeKey,
  prop = 'variant'
}) => {
  const fn = props => {
    // Resolves the key, if its a function, and fetches the value of the variant
    const path = `${fetch(key, props)}.${props[prop]}`
    return themeGet(path)(props) || null
  }
  fn.propTypes = {
    [prop]: propTypes.numberOrString
  }
  return fn
}

// Merges the default theme and any user provided theme.
export const mergeWithDefaultTheme = (theme = {}) =>
  deepmerge(
    defaultTheme,
    theme,
    // By default deepmerge concatenates arrays
    { arrayMerge: (defaultArray, themeArray) => themeArray || defaultArray }
  )
