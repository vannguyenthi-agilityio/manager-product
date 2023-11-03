// Utils
import { convertPxToRem } from '@utils/common';

// Constants
import { COLORS } from '@constants';

const tableTheme = {
  baseStyle: {
    th: {
      textTransform: 'none'
    }
  },

  sizes: {
    default: {
      th: {
        fontSize: 'sm',
        lineHeight: 'extraSmall',
        px: 'tableSpacing.tighter',
        fontWeight: '600'
      },
      td: {
        px: 'tableSpacing.tighter',
        fontSize: 'sm',
        lineHeight: 'base',
        fontWeight: '600'
      }
    }
  },

  variants: {
    default: {
      table: {
        bg: `${COLORS.WHITE}`
      },
      th: {
        color: `${COLORS.BLACK}.500`,
        p: convertPxToRem(10)
      },
      thead: {
        width: 'full',
        tr: {
          px: convertPxToRem(20),
          h: convertPxToRem(40),
          borderBottomWidth: '1px',
          borderColor: `${COLORS.GREY}.600`,
          th: {
            '&:first-of-type': {
              borderLeftRadius: convertPxToRem(8)
            },
            '&:last-of-type': {
              borderRightRadius: convertPxToRem(8)
            }
          }
        }
      },
      tbody: {
        tr: {
          h: convertPxToRem(80),
          borderBottomWidth: '1px',
          borderColor: `${COLORS.GREY}.600`,
          cursor: 'pointer',
          _hover: {
            bg: `${COLORS.GREY}.50`,
            td: {
              '&:first-of-type': {
                borderLeftRadius: convertPxToRem(8)
              },
              '&:last-of-type': {
                borderRightRadius: convertPxToRem(8)
              }
            }
          }
        }
      }
    }
  }
};

export default tableTheme;
