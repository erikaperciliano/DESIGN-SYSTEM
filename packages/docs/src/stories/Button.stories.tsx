import { Button } from '@ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Button',
    component: Button
} as Meta

export const Primary: StoryObj = {
    args: {
        children: 'Hello World', // Example props
      },
}

