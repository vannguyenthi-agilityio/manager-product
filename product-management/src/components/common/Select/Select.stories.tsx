// Component
import Select from '.';

// Types
import type { ISelect } from '.';
import { StoryFn, Meta } from '@storybook/react';

// Code metadata
import { asDefault, disabled, large, medium, small, withoutLabel } from './Select.code';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as Meta;

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

const Template: StoryFn<ISelect> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
  size: 'sm',
  options: mockOptions
};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: mockOptions
};
WithoutLabel.parameters = {
  componentSource: {
    code: withoutLabel,
    language: 'typescript'
  }
};

export const Large = Template.bind({});
Large.args = {
  options: mockOptions,
  label: 'Large',
  size: 'lg'
};
Large.parameters = {
  componentSource: {
    code: large,
    language: 'typescript'
  }
};

export const Medium = Template.bind({});
Medium.args = {
  options: mockOptions,
  label: 'Medium',
  size: 'md'
};
Medium.parameters = {
  componentSource: {
    code: medium,
    language: 'typescript'
  }
};

export const Small = Template.bind({});
Small.args = {
  options: mockOptions,
  label: 'Small',
  size: 'sm'
};
Small.parameters = {
  componentSource: {
    code: small,
    language: 'typescript'
  }
};

export const Disable = Template.bind({});
Disable.args = {
  options: mockOptions,
  label: 'Disable',
  isDisabled: true
};
Disable.parameters = {
  componentSource: {
    code: disabled,
    language: 'typescript'
  }
};
