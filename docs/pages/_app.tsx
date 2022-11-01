import '../styles/global.css';
import 'nextra-theme-docs/style.css';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../lib/stitches.config';

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider
      attribute={'class'}
      value={{
        dark: darkTheme,
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
