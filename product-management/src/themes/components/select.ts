// Utils
import { convertPxToRem } from '@utils/common';

// Constants
import { COLORS } from '@constants';

const selectTheme = {
  sizes: {
    default: {
      field: {
        fontSize: 'sm',
        lineHeight: convertPxToRem(17),
        fontWeight: 'normal',
        pl: convertPxToRem(15),
        h: convertPxToRem(44),
        '&.selected': {
          color: `${COLORS.BLACK}`,
          opacity: '1'
        }
      }
    },
    sm: {
      field: {
        fontSize: 'sm',
        lineHeight: convertPxToRem(17),
        fontWeight: 'normal',
        pl: convertPxToRem(15),
        h: convertPxToRem(44)
      }
    },
    xs: {
      field: {
        fontSize: 'sm',
        lineHeight: convertPxToRem(17),
        fontWeight: 'normal',
        pl: convertPxToRem(0),
        h: convertPxToRem(30),
        w: convertPxToRem(60)
      }
    }
  },
  variants: {
    outline: {
      field: {
        borderColor: `${COLORS.CONAL}.500`,
        color: `${COLORS.BLACK}.500`,
        opacity: '0.8',
        height: convertPxToRem(44),
        borderRadius: 'sm',
        backgroundColor: `${COLORS.WHITE}`,
        cursor: 'pointer',
        _hover: {
          borderColor: `${COLORS.GREY}.300`
        },
        _disabled: {
          _hover: {
            cursor: 'default',
            borderColor: `${COLORS.GREY}.400`
          }
        },
        _invalid: {
          borderWidth: '1px',
          borderColor: `${COLORS.RED}.600`
        },
        '&.selected': {
          color: `${COLORS.BLACK}`,
          opacity: '1'
        }
      },
      icon: {
        color: `${COLORS.GREY}.500`
      }
    },
    default: {
      field: {
        pl: convertPxToRem(15),
        h: `${convertPxToRem(44)}`
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'outline'
  }
};

export default selectTheme;
