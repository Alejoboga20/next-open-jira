import { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

const HomePage: NextPage = () => {
	return (
		<Layout title='Open JIRA'>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Pending' />

						<CardContent>
							{/* Add New Entry */}
							<EntryList />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='In Progress' />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Done' />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default HomePage;
