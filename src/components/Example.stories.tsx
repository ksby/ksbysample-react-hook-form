import { Story } from '@storybook/react';

import Example from './Example';

export default {
  title: 'Example',
  component: Example,
};

const Template: Story = () => <Example />;

export const Default = Template.bind({});
Default.args = {};
