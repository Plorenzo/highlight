import React from 'react'
import { ComponentMeta } from '@storybook/react-vite'

import { Divider } from './Divider'

export default {
	title: 'Components/Divider',
	component: Divider,
} as ComponentMeta<typeof Divider>

export const Basic = () => <Divider>Hello! 👋</Divider>
