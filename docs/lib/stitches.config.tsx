import { createStitches } from '@stitches/react';
import {
  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,
  indigo,
  indigoDark,
  indigoA,
  indigoDarkA,
  blue,
  blueDark,
  red,
  redDark,
  redA,
  redDarkA,
  yellow,
  yellowDark,
  yellowA,
  yellowDarkA,
  green,
  greenDark,
  greenA,
  greenDarkA,
  blackA,
  whiteA,
} from '@radix-ui/colors';
import React from 'react';

const pageWidth: number = 1140;
const containerPadding: number = 26;
const containerMobilePadding: number = 20;
const navbarHeight: number = 55;

const sidebarWidth: number = 220;
const sidebarFoldedWidth: number = 90;
const verticalPadding: number = 13;
const verticalLargePadding: number = 15;
const mainPadding: number = 30;
const sidebarPadding: number = 20;
const innerPadding: number = 16;
const totalPadding: number = mainPadding + innerPadding;
const sidebarTotalPadding: number = sidebarPadding + innerPadding;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...mauveA,
      ...indigo,
      ...indigoA,
      ...blue,
      ...red,
      ...redA,
      ...yellow,
      ...yellowA,
      ...green,
      ...greenA,
      ...blackA,
      ...whiteA,
      white: '#ffffff',
      black: '#000000',
      pageBackground: '$mauve2',
      navbarTransparentBackground: '#f9f8f93f',
      navigationBarBackground: '$mauve1',
      cardBackground: '$white',
      clear: 'transparent',
      border: '$mauveA4',
      cardBorder: '$mauveA3',
      primary: '$primary10',
      primary1: '$indigo1',
      primary2: '$indigo2',
      primary3: '$indigo3',
      primary4: '$indigo4',
      primary5: '$indigo5',
      primary6: '$indigo6',
      primary7: '$indigo7',
      primary8: '$indigo8',
      primary9: '$indigo9',
      primary10: '$indigo10',
      primary11: '$indigo11',
      primary12: '$indigo12',
    },
    shadows: {
      'board': '0 9px 18px 0 rgba(0, 0, 0, 0.018)',
      'float': '0 10px 20px 0 rgba(0, 0, 0, 0.03)',
    },
    fontSizes: {
      'xxs': '12px',
      'xs': '13px',
      'sm': '14px',
      'base': '15px',
      'md': '16px',
      'lg': '17px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '26px',
      '5xl': '34px',
      '6xl': '40px',
      '7xl': '50px',
      '8xl': '62px',
    },
    letterSpacings: {
      'normal': 'normal',
      'title': '-0.03em',
    },
    fonts: {
      'title': '"Inter", --apple-system, sans-serif',
    },
    radii: {
      'xs': '4px',
      'sm': '6px',
      'base': '8px',
      'md': '10px',
      'lg': '14px',
      'xl': '18px',
    },
    transitions: {
      'cubic': 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  media: {
    sm: '(min-width: 648px)',
    md: '(min-width: 860px)',
    lg: '(min-width: 1080px)',
    xl: '(min-width: 1280px)',
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...mauveDark,
    ...mauveDarkA,
    ...indigoDark,
    ...indigoDarkA,
    ...blueDark,
    ...redDark,
    ...redDarkA,
    ...yellowDark,
    ...yellowDarkA,
    ...greenDark,
    ...greenDarkA,
    pageBackground: '$black',
    navbarTransparentBackground: '#0000002f',
    navigationBarBackground: '$mauve1',
    cardBackground: '$mauve2',
  },
});

export const Layout = styled('div', {});
export const LinkLayout = styled('a', {});
export const SpanLayout = styled('span', {});

export const HStack = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const VStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ScrollLayout = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  padding: 20,
  rowGap: 20,
});

export type Polymorphic = string | React.ComponentType<any>;

export function mergeCss(candidates: string[]): string {
  return candidates.join(', ');
}
