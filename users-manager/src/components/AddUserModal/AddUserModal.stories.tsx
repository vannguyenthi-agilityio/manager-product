import Storybook from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import AddUserModal from './index';

export default {
  title: 'Components/AddUserModal',
  component: AddUserModal
} as Storybook.ComponentMeta<typeof AddUserModal>;

const Template: Storybook.ComponentStory<typeof AddUserModal> = (args) => (
  <AddUserModal
    onClose={action('onCloseHandler')}
    onChange={action('onChangeHandler')}
    onBlur={action('onBlurHandler')}
    onSubmit={action('onSubmitHandler')}
    {...args}
  />
);

export const AddUserModalDefault = Template.bind({});
AddUserModalDefault.args = {
  error: '',
  isOpen: true,
  isDisabledSubmit: false,
  isLoading: false
};
