import { Story } from '@storybook/react';

import RegisterFields from './RegisterFields';

export default {
  title: 'RegisterFields',
  component: RegisterFields,
};

const Template: Story = () => <RegisterFields />;

export const Default = Template.bind({});
Default.args = {};
