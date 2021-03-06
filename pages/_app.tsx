import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UiProvider } from '../context/ui/UIProvider';
import '../styles/globals.css';
import { EntriesProvider } from '../context/entries/EntriesProvider';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider maxSnack={3}>
			<EntriesProvider>
				<UiProvider>
					<ThemeProvider theme={lightTheme}>
						<CssBaseline>
							<Component {...pageProps} />
						</CssBaseline>
					</ThemeProvider>
				</UiProvider>
			</EntriesProvider>
		</SnackbarProvider>
	);
}

export default MyApp;
