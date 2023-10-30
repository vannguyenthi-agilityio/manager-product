// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

// Custom theme of Component
import buttonTheme from './components/button';
import { COLORS } from '@constants';
import CUSTOM_FONTS from './fonts';
import CUSTOM_SHADOWS from './shadows';
import CUSTOM_RADIUS from './radius';

const CHAKRA_THEME = {
  ...extendTheme({
    components: {
      Button: buttonTheme
    },
    colors: CUSTOM_COLORS_PALETTE,
    fonts: CUSTOM_FONTS,
    shadows: CUSTOM_SHADOWS,
    radii: CUSTOM_RADIUS
  }),
  styles: {
    global: {
      'html, body': {
        background: `${COLORS.GREY}.10`,
        fontFamily: 'body'
      }
    }
  }
};

export default CHAKRA_THEME;
