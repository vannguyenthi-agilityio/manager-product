import { Button, Box, Text } from '@chakra-ui/react';

// Utils
import { convertPxToRem } from '@utils/index';

// Icons
import { CloseIcon } from '@components/common/Icons';

// Constants
import { COLORS, POPUP_STATUS } from '@constants';

interface IPopupProps {
  status: POPUP_STATUS;
  content: string;
  onClosePopup: () => void;
}

const Popup = ({ status, content, onClosePopup }: IPopupProps) => {
  const textColorMapping: {
    [key: string | POPUP_STATUS]: string;
  } = {
    [`${POPUP_STATUS.ERROR}`]: `${COLORS.PINK}.600`,
    [`${POPUP_STATUS.SUCCESS}`]: `${COLORS.GREEN}.500`,
    [`${POPUP_STATUS.WARNING}`]: `${COLORS.YELLOW}.500`
  };
  return (
    <Box
      data-testid={status}
      w={convertPxToRem(434)}
      h={convertPxToRem(145)}
      p='24px 15px 24px 32px'
      bgColor={`${COLORS.GREY}.50`}
      boxShadow='lg'
      borderRadius='md'
      position='relative'
    >
      <Button
        position='absolute'
        variant='unstyled'
        onClick={onClosePopup}
        top={convertPxToRem(14)}
        right={convertPxToRem(14)}
        h='unset'
        minW='unset'
      >
        <CloseIcon />
      </Button>
      <Text
        color={textColorMapping[status]}
        textTransform='capitalize'
        fontSize='xl'
        fontWeight='light'
      >
        {status}
      </Text>
      <Text
        lineHeight='md'
        noOfLines={3}
      >
        {content}
      </Text>
    </Box>
  );
};

export default Popup;
