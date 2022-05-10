import { SaveOutlined } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { Layout } from '../../components/layouts';

const EntryPage = () => {
	return (
		<Layout title='...'>
			<Grid container justifyContent='center' sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title='Entry' subheader={`Created at: ....`} />

						<CardContent>
							<TextField
								sx={{ marginTop: 2, marginBottom: 1 }}
								fullWidth
								placeholder='New Entry'
								autoFocus
								multiline
								label='New Entry'
							/>
							{/* Radio */}
						</CardContent>

						<CardActions>
							<Button startIcon={<SaveOutlined />} variant='contained' fullWidth>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default EntryPage;
