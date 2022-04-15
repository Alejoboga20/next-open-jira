import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UiProvider } from '../context/ui/UiProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UiProvider>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline>
					<Component {...pageProps} />
				</CssBaseline>
			</ThemeProvider>
		</UiProvider>
	);
}

export default MyApp;
