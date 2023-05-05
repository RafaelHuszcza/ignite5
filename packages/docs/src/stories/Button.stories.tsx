import { Button, ButtonProps } from '@ignite-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
