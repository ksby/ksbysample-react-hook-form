import { Story } from '@storybook/react';

import IntegratingAnExistingForm from './IntegratingAnExistingForm';

export default {
  title: 'IntegratingAnExistingForm',
  component: IntegratingAnExistingForm,
};

const Template: Story = () => <IntegratingAnExistingForm />;

export const Default: Story = Template.bind({});
Default.args = {};
