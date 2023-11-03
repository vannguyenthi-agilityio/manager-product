//Constants
import { COLORS } from '@constants';

// Utils
import { convertPxToRem } from '@utils/common';

const menuTheme = {
  baseStyle: {
    list: {
      py: convertPxToRem(8),
      minW: convertPxToRem(97),
      h: convertPxToRem(84),
      borderColor: `${COLORS.GREY}.750`
    },
    item: {
      py: convertPxToRem(5),
      px: convertPxToRem(5),
      justifyContent: 'center',
      color: `${COLORS.BLACK}.500`,
      backgroundColor: 'transparent',
      _hover: {
        bg: `${COLORS.GREY}.50`
      },
      _focus: {
        bg: 'transparent'
      }
    }
  }
};

export default menuTheme;
