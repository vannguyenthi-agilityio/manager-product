import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'OpenSans';
        font-display: swap;
        font-style: normal;
        src: url('/assets/fonts/OpenSans.woff2') format('woff2');
      }
    `}
  />
);
export default Fonts;
