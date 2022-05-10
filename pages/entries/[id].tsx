import { ChangeEvent, useMemo, useState, useContext } from 'react';
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

import { Layout } from '../../components/layouts';
import { Status } from '../../interfaces';
import { dbEntries } from '../../database';
import { IEntry } from '../../models/Entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { Entry } from '../../interfaces/entry';

const validStatus: Status[] = ['Done', 'In Progress', 'Pending'];

const EntryPage = ({ entry }: EntryPageProps) => {
	const { updateEntry } = useContext(EntriesContext);
	const [inputValue, setInputValue] = useState(entry.description);
	const [status, setStatus] = useState<Status>(entry.status);
	const [touched, setTouched] = useState(false);

	const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

	const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as Status);
	};

	const onSave = () => {
		if (inputValue.trim().length === 0) return;

		const updatedEntry: Entry = {
			...entry,
			description: inputValue,
			status,
		};

		updateEntry(updatedEntry, true);
	};

	return (
		<Layout title={inputValue.substring(0, 20) + '...'}>
			<Grid container justifyContent='center' sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title='Entry' subheader={`Created at: ....`} />

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
	entry: IEntry;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };

	const entry = await dbEntries.getEntryById(id);

	/* To avoid rendering a page when ID does not exist */
	if (!entry) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			entry,
		},
	};
};

export default EntryPage;
