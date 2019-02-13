import React from 'react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { configure, addDecorator } from '@storybook/react'
import { Container } from '../src/Container'
import sampleTheme from './themes/sampleTheme'

// Takes care of setting the Medable Container
const MedableContainerDecorator = storyFn => <Container>{storyFn()}</Container>
addDecorator(MedableContainerDecorator)

const themes = [{ name: 'No Theme Selected' }, sampleTheme]
addDecorator(withThemesProvider(themes))

// Configures the stories that should be loaded
function loadStories() {
  require('../stories/index.js')
  require('../stories/portal-based')
}

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

configure(loadStories, module)
