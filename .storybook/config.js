import { configure } from '@storybook/html'

function loadStories() {
  const importAll = r => r.keys().map(r)
  importAll(require.context('../components', true, /\.stories\.js$/))
}

configure(loadStories, module)
