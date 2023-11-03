import Storybook from '@storybook/react';

// Components
import Loading from '.';

// Code
import { asDefault } from './Loading.code';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    componentSource: {
      code: asDefault
    }
  }
} as Storybook.Meta<typeof Loading>;

const Template: Storybook.StoryFn<typeof Loading> = (args) => {
  return (
    <Loading
      isFull={true}
      {...args}
    />
  );
};

export const LoadingDefault = Template.bind({});

LoadingDefault.args = {
  size: 'xl'
};

LoadingDefault.parameters = {
  componentSource: {
    code: asDefault
  }
};
