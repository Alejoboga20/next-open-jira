import { Box } from '@mui/material';
import Head from 'next/head';
import { Navbar } from '../ui';

export const Layout = ({ title = 'Open JIRA', children }: LayoutProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar />
			{/* Sidebar */}

			<Box sx={{ padding: '10px 20px' }}>{children}</Box>
		</Box>
	);
};

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	title?: string;
}
