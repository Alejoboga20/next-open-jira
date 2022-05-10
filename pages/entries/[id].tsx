import { ChangeEvent, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';
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
import { isValidObjectId } from 'mongoose';

import { Layout } from '../../components/layouts';
import { Status } from '../../interfaces';

const validStatus: Status[] = ['Done', 'In Progress', 'Pending'];

const EntryPage = ({ id }: EntryPageProps) => {
	const [inputValue, setInputValue] = useState('');
	const [status, setStatus] = useState<Status>('Pending');
	const [touched, setTouched] = useState(false);

	const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

	const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as Status);
	};

	const onSave = () => {
		console.log({ inputValue, status });
	};

	return (
		<Layout title='...'>
			<Grid container justifyContent='center' sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title={`Entry: ${inputValue}`} subheader={`Created at: ....`} />

						<CardContent>
							<TextField
								sx={{ marginTop: 2, marginBottom: 1 }}
								label='New Entry'
								value={inputValue}
								onChange={onInputValueChanged}
								onBlur={() => setTouched(true)}
								helperText={isNotValid && 'Enter a Value'}
								error={isNotValid}
								placeholder='New Entry'
								fullWidth
								autoFocus
								multiline
							/>

							<FormControl>
								<FormLabel>Status: </FormLabel>
								<RadioGroup row value={status} onChange={onStatusChanged}>
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
							<Button
								startIcon={<SaveOutlined />}
								variant='contained'
								onClick={onSave}
								disabled={inputValue.length <= 0}
								fullWidth
							>
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

interface EntryPageProps {
	id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };

	/* To avoid rendering a page when ID does not exist */
	if (!isValidObjectId(id)) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			id,
		},
	};
};

export default EntryPage;
