import { DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import {
	Button,
	capitalize,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	IconButton,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { Layout } from '../../components/layouts';
import { Status } from '../../interfaces';

const validStatus: Status[] = ['Done', 'In Progress', 'Pending'];

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

							<FormControl>
								<FormLabel>Status: </FormLabel>
								<RadioGroup row>
									{validStatus.map((option) => (
										<FormControlLabel
											key={option}
											value={option}
											control={<Radio />}
											label={capitalize(option)}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>

						<CardActions>
							<Button startIcon={<SaveOutlined />} variant='contained' fullWidth>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<IconButton
				sx={{
					position: 'fixed',
					right: 30,
					bottom: 30,
					backgroundColor: 'error.dark',
				}}
			>
				<DeleteOutlined />
			</IconButton>
		</Layout>
	);
};

export default EntryPage;
