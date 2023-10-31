// Constants
import { COLORS } from '@constants';

// Utils
import { convertPxToRem } from '@utils/common';

const inputTheme = {
  sizes: {
    default: {
      field: {
        fontWeight: 'normal',
        lineHeight: `${convertPxToRem(17)}`,
        fontSize: 'sm'
      }
    }
  },
  variants: {
    outline: {
      field: {
        borderColor: `${COLORS.CONAL}.500`,
        color: `${COLORS.BLACK}.500`,
        background: `${COLORS.WHITE}`,
        borderRadius: 'sm'
      }
    }
  },
  baseStyle: {
    field: {
      px: convertPxToRem(20),
      h: convertPxToRem(44),
      _placeholder: {
        color: `${COLORS.GREY}.250`,
        opacity: '0.5'
      },
      _invalid: {
        borderColor: `${COLORS.RED}.600`,
        borderWidth: '1px'
      }
    }
  },

  defaultProps: {
    size: 'default',
    variant: 'outline'
  }
};

export default inputTheme;
