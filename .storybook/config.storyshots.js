import React from 'react'
import { configure } from '@storybook/react'

// Simple configuration to be used by story-shots

// Configures the stories that should be loaded
function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
