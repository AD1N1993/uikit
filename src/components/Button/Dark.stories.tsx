import {Meta, Story} from '@storybook/react'

import Button from './Button'
import {IButton} from './IButton'

export default {
  title: 'Elements/Button/DarkMode',
  component: Button,
  parameters: {
    backgrounds: {default: 'darkest',values: [{name:'darkest', value:'#1C1C1D'}]}
  },
  argTypes: {
    onClick: {action: 'click'},
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    size: {
      type: 'radio',
      options: ['s', 'l']
    }
  },
} as Meta

const Template: Story<IButton> = (args) => <Button {...args}>PrimaryButton</Button>

export const Standard = Template.bind({})
Standard.args = {theme: 'dark', variant: 'standard'}

export const Additional = Template.bind({})
Additional.args = {variant: 'additional', theme: 'dark'}
