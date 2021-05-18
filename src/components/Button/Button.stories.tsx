import {actions} from '@storybook/addon-actions'
import {Meta, Story} from '@storybook/react'

import Button from './Button'
import {IButton} from './IButton'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    onClick: {...actions('onClick')},
    label: { control: { type: 'accent' } }

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

export const Accent = Template.bind({})
Accent.args = {
  label: 'Button',
  theme: 'light',
  type: 'accent'
}
