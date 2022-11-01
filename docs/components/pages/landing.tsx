import React from 'react';
import { Layout, styled } from '../../lib/stitches.config';

import MelaIconSvg from '../../assets/icon.svg';
const MelaIcon = styled(MelaIconSvg, {});

const sampleCode: string = `
import * as DatePicker from '@ams-js/headless';

<DatePicker.Root
  date={...}
  baseDate={...}
  onDateChange={(date: Date) => {...}}
>
  <DatePicker.Input
    placeholder={'...'}
  />
  {/* More composable modules coming soon */}
</DatePicker.Root>
`;

const HeroName = styled('h1', {
  margin: 0,
  padding: 0,
  fontFamily: '$typography',
  fontSize: '$2xl',
  fontWeight: 700,
  letterSpacing: '$title',
  paddingTop: 6,
  paddingBottom: 10,
  '@sm': {
    fontSize: '$3xl',
    lineHeight: 1.12,
  },
  '@md': {
    fontSize: '$4xl',
    lineHeight: 1.06,
  },
});

const HeroTitle = styled('h1', {
  maxWidth: 760,
  margin: 0,
  padding: 0,
  fontFamily: '$title',
  letterSpacing: '$title',
  fontSize: 38,
  fontWeight: 700,
  lineHeight: 1.10,
  paddingTop: 6,
  paddingBottom: 10,
  fontFeatureSettings: '"rlig" 1,"calt" 1,"ss01" 1,"ss06" 1 !important',
  '@sm': {
    fontSize: 52,
    lineHeight: 1.08,
  },
  '@md': {
    fontSize: 68,
    lineHeight: 1.02,
  },
});

const HeroSubtitle = styled('div', {
  maxWidth: 660,
  fontSize: '$2xl',
  fontWeight: 400,
  color: '$mauveA9',
  lineHeight: 1.5,
  '& b': {
    fontWeight: 400,
    color: '$mauveA12',
  },
  '@sm': {
    fontSize: '$3xl',
  },
  '@md': {
    fontSize: '$4xl',
  },
});

const SectionContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: 10,
  padding: '50px 0',
  '@sm': {
    padding: '70px 0',
  },
});

const SectionTip = styled('div', {
  fontSize: '$xs',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '$text',
  color: '$primary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: 5,
  '& .icon': {
    width: 18,
    height: 18,
    strokeWidth: 2.2,
    lineHeight: 0,
  },
  '@sm': {
    fontSize: '$sm',
    '& .icon': {
      width: 20,
      height: 20,
      strokeWidth: 2.1,
      marginBottom: -1,
      lineHeight: 0,
    },
  },
});

const SectionTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: 500,
  fontFamily: '$typography',
  lineHeight: 1.2,
  letterSpacing: '$title',
  color: '$mauve12',
  '@sm': {
    fontSize: '$5xl',
  },
});

const SectionSubtitle = styled('div', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$mauveA9',
  lineHeight: 1.55,
  '@sm': {
    fontSize: '$base',
  },
  '& strong': {
    fontWeight: 500,
    fontSize: '1em',
  },
});

export function LandingPage() {
  return (
    <Layout
      css={{
        width: '100%',
        paddingTop: 120,
        paddingBottom: 140,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        rowGap: 14,
        '@md': {
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 180,
          paddingBottom: 200,
        },
        position: 'relative',
        zIndex: 0,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `
            radial-gradient(at 27% 33%, #34d399 0, transparent 50%),
            radial-gradient(at 54% 96%, #f59e0b 0, transparent 50%),
            radial-gradient(at 10% 25%, #4ade80 0, transparent 50%),
            radial-gradient(at 96% 96%, #facc15 0, transparent 50%),
            radial-gradient(at 30% 55%, #84cc16 0, transparent 50%),
            radial-gradient(at 78% 52%, #ef4444 0, transparent 50%)
          `,
          filter: 'blur(100px) saturate(140%)',
          opacity: 0.18,
          transform: 'translateZ(0)',
        },
      }}
    >
      <Layout
        css={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: '$mauveA2',
          border: '1px solid $border',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 8,
          borderRadius: 999,
          padding: '6px 12px',
          marginBottom: 10,
        }}
      >
        <MelaIcon
          css={{
            width: 12,
            height: 12,
            '& rect': {
              fill: '$mauve12',
            },
          }}
        />
        <Layout
          css={{
            fontSize: '$sm',
            fontWeight: 500,
            color: '$mauve11',
            letterSpacing: '$text',
            '& b': {
              fontWeight: 500,
              color: '$mauve12',
            },
          }}
        >
          This project is still a <b>work in progress</b>.
        </Layout>
      </Layout>
      <HeroTitle
        css={{
          background: 'linear-gradient(180deg, rgba(0,0,0,.8), #000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          '.dark &': {
            background: 'linear-gradient(180deg, #fff, rgba(255,255,255,.7))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        }}
      >
        A Next.js API handler that makes the best DX
      </HeroTitle>
      <HeroSubtitle>
        Mela API is a <b>developer-friendly</b> wrapper for Next.js that
        helps you build API <b>confidently</b> and <b>quickly</b>.
      </HeroSubtitle>
    </Layout>
  );
}
