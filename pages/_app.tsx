import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline>
				<Component {...pageProps} />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default MyApp;
