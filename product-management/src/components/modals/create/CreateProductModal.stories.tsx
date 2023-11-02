// Libraries
import Storybook from '@storybook/react';

// Components
import CreateProductModal from '.';

import { MOCKED_PRODUCT_VALUE_DEFAULT } from '@constants';

// Code
import { asDefault } from './CreateProductModal.code';

export default {
  title: 'Components/modals/CreateProductModal',
  component: CreateProductModal,
  argTypes: {
    isOpen: {
      type: 'boolean',
      defaultValue: true
    },
    onClick: { action: 'click' }
  },
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  }
} as Storybook.Meta<typeof CreateProductModal>;

const Template: Storybook.StoryFn<typeof CreateProductModal> = (args) => {
  return <CreateProductModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  product: MOCKED_PRODUCT_VALUE_DEFAULT
};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};
