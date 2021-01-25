import { createGlobalStyle, defaultTheme } from '@xstyled/styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'League Spartan' ;
    src: url('/fonts/LeagueSpartan-ExtraBold.otf') format('opentype');
    font-weight:'800'
  }

  body{
    font-family:'League Spartan'
  }
`;

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    'primary-button': {
      stroke: '#AFFC41',
      'initial-bg': 'rgba(118,176,65,1)',
      'final-bg': 'rgba(95,142,51,1)',
    },
  },
  fonts: {
    fonts: {
      body: 'League Spartan',
    },
  },
};
