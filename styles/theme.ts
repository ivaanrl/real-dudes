import { createGlobalStyle, defaultTheme } from '@xstyled/styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'League Spartan' ;
    src: url('/fonts/LeagueSpartan-ExtraBold.otf') format('opentype');
    font-weight:'800'
  }

  @font-face {
    font-family: 'Inter' ;
    src: url('/fonts/Inter-Regular.ttf') format('truetype');
    font-weight:'400'
  }

  body{
    font-family:'League Spartan';
    background-color: #1D1E2D;
  }
`;

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    'primary-button-stroke': '#AFFC41',
    'primary-button-initial-bg': 'rgba(118,176,65,1)',
    'primary-button-final-bg': 'rgba(95,142,51,1)',
  },
  fonts: {
    fonts: {
      body: 'League Spartan',
    },
  },
};
