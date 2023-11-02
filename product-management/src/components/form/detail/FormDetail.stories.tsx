import Storybook from '@storybook/react';

// Components
import FormDetail from '.';

// Constants
import { MOCKED_PRODUCT_VALUE_DEFAULT } from '@constants';

// Code
import { asDefault } from './FormDetail.code';

export default {
  title: 'Components/FormDetail',
  component: FormDetail,
  parameters: {
    componentSource: {
      code: asDefault,
      language: 'typescript'
    }
  }
} as Storybook.Meta<typeof FormDetail>;

const Template: Storybook.StoryFn = (args) => <FormDetail {...args} />;

export const FormDetailDefault = Template.bind({});
FormDetailDefault.args = {
  product: MOCKED_PRODUCT_VALUE_DEFAULT
};
