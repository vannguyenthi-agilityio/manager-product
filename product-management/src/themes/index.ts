// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

// Custom theme of Component
import buttonTheme from './components/button';
import selectTheme from './components/select';
import inputTheme from './components/input';
import modalTheme from './components/modal';
import tableTheme from './components/table';
import menuTheme from './components/menu';

import CUSTOM_FONTS from './fonts';
import CUSTOM_SHADOWS from './shadows';
import CUSTOM_RADIUS from './radius';

const CHAKRA_THEME = {
  ...extendTheme({
    components: {
      Button: buttonTheme,
      Select: selectTheme,
      Input: inputTheme,
      Modal: modalTheme,
      Table: tableTheme,
      Menu: menuTheme
    },
    colors: CUSTOM_COLORS_PALETTE,
    fonts: CUSTOM_FONTS,
    shadows: CUSTOM_SHADOWS,
    radii: CUSTOM_RADIUS
  }),
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body'
      }
    }
  }
};

export default CHAKRA_THEME;
