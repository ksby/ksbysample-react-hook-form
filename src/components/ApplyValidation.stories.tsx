import { Story } from '@storybook/react';

import ApplyValidation from './ApplyValidation';

export default {
  title: 'ApplyValidation',
  component: ApplyValidation,
};

const Template: Story = () => <ApplyValidation />;

export const Default: Story = Template.bind({});
Default.args = {};
