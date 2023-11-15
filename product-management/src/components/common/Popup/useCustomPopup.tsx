import { useToast } from '@chakra-ui/react';
import Popup from '@components/common/Popup';
import { POPUP_STATUS } from '@constants';

export const useCustomPopup = () => {
  const toast = useToast();

  return (message: string, popupStatus: POPUP_STATUS) => {
    toast({
      position: 'bottom-right',
      render: ({ onClose }) => (
        <Popup
          content={message}
          status={popupStatus}
          onClosePopup={onClose}
        />
      )
    });
  };
};
