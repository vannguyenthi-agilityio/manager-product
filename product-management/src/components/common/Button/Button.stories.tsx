// Libraries
import Storybook from '@storybook/react';

// Components
import { Button } from '@chakra-ui/react';

// Code scripts
import { asDefault, disabled, active, outline, loading } from './Button.code';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
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
      options: ['outline', 'solid', 'link', 'unstyled'],
      control: {
        type: 'inline-radio'
      },
      defaultValue: 'outline'
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      control: {
        type: 'inline-radio'
      },
      defaultValue: 'sm'
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false
    },
    isLoading: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as Storybook.Meta<typeof Button>;

const Template: Storybook.StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const Active = Template.bind({});
Active.args = {
  isActive: true
};
Active.parameters = {
  componentSource: {
    code: active,
    language: 'typescript'
  }
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};
Outline.parameters = {
  componentSource: {
    code: outline,
    language: 'typescript'
  }
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
Loading.parameters = {
  componentSource: {
    code: loading,
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
