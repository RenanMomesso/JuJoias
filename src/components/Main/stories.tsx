import { Meta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    backgroundColor: { control: 'color' }
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: ' askdopaskd',
//   description: 'asodkapsokd'
// }
