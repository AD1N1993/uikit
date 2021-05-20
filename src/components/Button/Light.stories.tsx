import {Meta, Story} from '@storybook/react'

import Button from './Button'
import {IButton} from './IButton'

export default {
  title: 'Elements/Button/LightMode',
  component: Button,
  argTypes: {
    onClick: {action: 'click'},
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    variant: {
      type: 'select',
      options: ['standard','save', 'accent', 'additional', 'dangerous', 'inversion']
    },
    size: {
      type: 'radio',
      options: ['s', 'l']
    }

  },
} as Meta

const Template: Story<IButton> = (args) => <Button {...args}>PrimaryButton</Button>

export const Standard = Template.bind({})

export const Save = Template.bind({})
Save.args = {variant: 'save'}

export const Accent = Template.bind({})
Accent.args = {variant: 'accent'}

export const Additional = Template.bind({})
Additional.args = {variant: 'additional'}

export const Dangerous = Template.bind({})
Dangerous.args = {variant: 'dangerous'}

export const Inversion = Template.bind({})
Inversion.args = {variant: 'inversion'}
Inversion.parameters = {backgrounds: {default: 'dark'}}

export const Small = Template.bind({})
Small.args = {variant: 'standard', size: "s"}
export const Link = Template.bind({})
Link.args = {
  attrs: {href: 'https://crtweb.ru/', target: 'blank'}
}
