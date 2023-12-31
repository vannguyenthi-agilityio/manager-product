// Libraries
import Storybook from '@storybook/react';

// Components
import ProductModal from '.';

import { MOCKED_PRODUCT_VALUE_DEFAULT, MOCKED_PRODUCT_EXIST, MODAL_TYPE } from '@constants';

// Code
import { asEdit, asDefault } from './ProductModal.code';

export default {
  title: 'Components/modals/ProductModal',
  component: ProductModal,
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
} as Storybook.Meta<typeof ProductModal>;

const Template: Storybook.StoryFn<typeof ProductModal> = (args) => {
  return <ProductModal {...args} />;
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

export const Edit = Template.bind({});
Edit.args = {
  product: MOCKED_PRODUCT_EXIST,
  type: MODAL_TYPE.EDIT
};
Edit.parameters = {
  componentSource: {
    code: asEdit,
    language: 'typescript'
  }
};
