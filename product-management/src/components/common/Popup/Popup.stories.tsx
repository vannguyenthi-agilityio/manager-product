// Libraries
import Storybook from '@storybook/react';

// Components
import Popup from '.';

// Constants
import { POPUP_STATUS } from '@constants';

// Code
import { asPopupError, asPopupWarning, asPopupSuccess } from './Popup.code';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    onClosePopup: { action: 'click' }
  },
  parameters: {
    componentSource: {
      language: 'typescript'
    }
  }
} as Storybook.ComponentMeta<typeof Popup>;

const Template: Storybook.ComponentStory<typeof Popup> = (args) => {
  return <Popup {...args} />;
};

export const PopupError = Template.bind({});
PopupError.args = {
  status: POPUP_STATUS.ERROR,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};
PopupError.parameters = {
  componentSource: {
    code: asPopupError
  }
};

export const PopupWarning = Template.bind({});
PopupWarning.args = {
  status: POPUP_STATUS.WARNING,
  content: 'Lorem ipsum dolor sit amet'
};
PopupError.parameters = {
  componentSource: {
    code: asPopupWarning
  }
};

export const PopupSuccess = Template.bind({});
PopupSuccess.args = {
  status: POPUP_STATUS.SUCCESS,
  content: 'Lorem ipsum dolor sit amet'
};
PopupError.parameters = {
  componentSource: {
    code: asPopupSuccess
  }
};
