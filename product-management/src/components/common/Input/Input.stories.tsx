// Libraries
import Storybook from '@storybook/react';

// Components
import { Input } from '@chakra-ui/react';

// Code scripts
import { asDefault, invalid, disabled } from './Input.code';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    color: {
      options: [
        'whiteAlpha',
        'blackAlpha',
        'grey',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
        'linkedin',
        'facebook',
        'messenger',
        'whatsapp',
        'twitter',
        'telegram',
        'mania',
        'coral',
        'conal'
      ],
      control: {
        type: 'select'
      },
      defaultValue: 'green'
    },
    variant: {
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      control: {
        type: 'inline-radio'
      },
      defaultValue: 'outline'
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      },
      defaultValue: 'sm'
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Storybook.Meta<typeof Input>;

const Template: Storybook.StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter name...'
};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const IsInvalid = Template.bind({});
IsInvalid.args = {
  isInvalid: true
};
IsInvalid.parameters = {
  componentSource: {
    code: invalid,
    language: 'typescript'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true
};
Disabled.parameters = {
  componentSource: {
    code: disabled,
    language: 'typescript'
  }
};
