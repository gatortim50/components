import 'jest-styled-components'
import initStoryshots from '@storybook/addon-storyshots'
import { containerRenderer } from 'utils/tests/containerRenderer'

// Added custom test method so that:
// - Class styles are printed with `jest-styled-components`
// - Use our own renderer to add Container object to render
// - Remove the Container object when creating the JSON tree.
// Tried using the `Stories2SnapsConverter` to create separate files for each component,
// BUT, it doesn't generate the styled component styles.
const styledComponentTest = ({ story, context }) => {
  const storyElement = story.render(context)
  const tree = containerRenderer.create(storyElement).toJSON()
  expect(tree).toMatchSnapshot()
}

initStoryshots({
  // Added custom config for StoryShots that does not add
  // any decorators to the storybooks configuration.
  // We removed the Container decorator, since our renderer already adds a countainer for each test
  //
  // Also There is some type of conflict
  // with `storybook-addon-styled-component-theme`'s `withThemesProvider` decorator
  // That causes all tests to return `null` when enabled
  configPath: '.storybook/config.storyshots.js',
  test: styledComponentTest
})
