// Constants
import { COLORS } from '@constants';

// Utils
import { convertPxToRem } from '@utils/common';

export default {
  baseStyle: {
    borderRadius: 'base',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: `${convertPxToRem(17)}`,
    bgColor: `${COLORS.MANIA}`
  },
  sizes: {
    xs: {
      px: `${convertPxToRem(13)}`,
      py: `${convertPxToRem(6)}`,
      h: `${convertPxToRem(20)}`
    },
    sm: {
      px: `${convertPxToRem(19)}`,
      h: `${convertPxToRem(44)}`
    },
    md: {
      px: `${convertPxToRem(28)}`,
      h: `${convertPxToRem(44)}`,
      fontSize: 'sm'
    },
    lg: {
      px: `${convertPxToRem(62)}`,
      h: `${convertPxToRem(44)}`,
      fontSize: 'sm'
    },
    xl: {
      px: `${convertPxToRem(85)}`,
      h: `${convertPxToRem(44)}`,
      fontSize: 'sm'
    },
    full: {
      width: 'full',
      h: `${convertPxToRem(44)}`,
      px: `${convertPxToRem(20)}`,
      fontSize: 'sm'
    }
  },
  variants: {
    solid: {
      _disabled: {
        outline: 'none !important'
      },
      _active: {
        outline: `solid 1px ${COLORS.WHITE}`,
        outlineOffset: -3
      }
    },
    outline: {
      bgColor: `${COLORS.MANIA}`
    },
    link: {
      color: `${COLORS.MANIA}`,
      fontSize: 'sm',
      borderRadius: 'none',
      bgColor: 'transparent'
    },
    transparent: {
      _hover: {
        outlineColor: 'transparent',
        bgColor: 'transparent'
      },
      _active: {
        outlineColor: 'transparent',
        bgColor: 'transparent'
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'solid',
    colorScheme: `${COLORS.MANIA}`
  }
};
