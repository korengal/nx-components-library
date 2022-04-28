import { Story, Meta } from '@storybook/react';
import { MyNewLibrary, MyNewLibraryProps } from './my-new-library';

export default {
  component: MyNewLibrary,
  title: 'MyNewLibrary',
} as Meta;

const Template: Story<MyNewLibraryProps> = (args) => <MyNewLibrary {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
