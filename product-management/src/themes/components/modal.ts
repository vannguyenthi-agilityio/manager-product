// Libraries
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

// Utils
import { convertPxToRem } from '@utils/common';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: defineStyle({
    borderRadius: 'sm',
    w: 'full',
    boxSizing: 'content-box'
  }),
  header: defineStyle({
    fontWeight: 300,
    fontSize: convertPxToRem(24),
    lineHeight: convertPxToRem(29)
  }),
  body: defineStyle({
    fontWeight: 300,
    fontSize: convertPxToRem(14),
    lineHeight: convertPxToRem(20)
  })
});

const sizes = {
  lg: definePartsStyle({
    dialog: {
      maxWidth: convertPxToRem(480)
    },
    header: defineStyle({
      p: `${convertPxToRem(30)} ${convertPxToRem(22)} 0`,
      fontSize: 'lg'
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(22)} 0`
    }),
    footer: defineStyle({
      py: `${convertPxToRem(30)}`
    })
  }),
  md: definePartsStyle({
    dialog: {
      maxWidth: convertPxToRem(400)
    },
    header: defineStyle({
      p: `${convertPxToRem(24)} ${convertPxToRem(25)} 0`,
      fontSize: 'lg'
    }),
    body: defineStyle({
      p: `${convertPxToRem(8)} ${convertPxToRem(25)} 0`
    }),
    footer: defineStyle({
      pt: `${convertPxToRem(15)}`,
      pb: `${convertPxToRem(24)}`
    })
  }),
  sm: defineStyle({
    dialog: {
      maxWidth: convertPxToRem(330)
    },
    header: defineStyle({
      p: `${convertPxToRem(20)} ${convertPxToRem(22)} 0`,
      fontSize: 'md'
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(22)} 0`
    }),
    footer: defineStyle({
      p: `${convertPxToRem(40)}`
    })
  }),
  xs: defineStyle({
    dialog: {
      maxWidth: convertPxToRem(320)
    },
    header: defineStyle({
      p: `${convertPxToRem(20)} ${convertPxToRem(22)} 0`,
      fontSize: 'sm'
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(22)} 0`
    }),
    footer: defineStyle({
      p: `${convertPxToRem(40)}`
    })
  })
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'lg'
  }
});
