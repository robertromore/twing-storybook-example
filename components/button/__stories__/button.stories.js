import { storiesOf } from '@storybook/html'

// Twig component
import component from './button.stories.twig'

// Component styles
// import './button.stories.scss'

const button_value = 'Button'

// Set the Group name
storiesOf('Atoms/Button', module)
  .add('default', () => component({
    'button_value': button_value
  }))
