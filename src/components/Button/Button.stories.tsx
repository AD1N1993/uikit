import {Meta, Story} from '@storybook/react'

import Button from './Button'
import {IButton} from './IButton'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    onClick: {action: 'clicked'},
    theme: {
      control: {
        type: 'radio',
        options: ['light', 'dark']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['save', 'accent', 'additional', 'dangerous', 'inversion']
      }
    }
  },
} as Meta

const Template: Story<IButton> = (args) => <Button {...args} />

export const LightMode = Template.bind({})
LightMode.args = {
  label: 'Button',
  theme: 'light',
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  label: 'Button',
  theme: 'dark',
}
DarkMode.parameters = {
  backgrounds: {default: 'dark'},
}
