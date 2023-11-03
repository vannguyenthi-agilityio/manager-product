// Constants
import { COLORS } from '@constants';

// Utils
import { convertPxToRem } from '@utils/common';

const inputTheme = {
  sizes: {
    default: {
      field: {
        fontWeight: 'normal',
        lineHeight: convertPxToRem(17),
        fontSize: 'sm',
        h: convertPxToRem(44),
        px: convertPxToRem(20)
      }
    },
    xs: {
      field: {
        fontWeight: 'normal',
        lineHeight: convertPxToRem(17),
        fontSize: 'sm',
        px: convertPxToRem(5),
        w: convertPxToRem(50),
        h: convertPxToRem(30),
        _placeholder: {
          color: `${COLORS.GREY}.600`
        }
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
