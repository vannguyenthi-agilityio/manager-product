// Libraries
import Storybook from '@storybook/react';

// Components
import ConfirmModal from '.';

// Constants
import { MOCKED_PRODUCT_VALUE_DEFAULT } from '@constants';

// Code
import { asDefault, asDelete } from './ConfirmModal.code';

export default {
  title: 'Components/modals/confirm/ConfirmModal',
  component: ConfirmModal,
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
} as Storybook.Meta<typeof ConfirmModal>;

const Template: Storybook.StoryFn<typeof ConfirmModal> = (args) => {
  return <ConfirmModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  componentSource: {
    code: asDefault,
    language: 'typescript'
  }
};

export const Delete = Template.bind({});
Delete.args = {
  product: MOCKED_PRODUCT_VALUE_DEFAULT,
  type: 'delete',
  title: 'Delete Product',
  content: 'Are you sure you want delete this product? This action cannot be undone'
};
Delete.parameters = {
  componentSource: {
    code: asDelete,
    language: 'typescript'
  }
};
