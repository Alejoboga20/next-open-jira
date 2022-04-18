import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {
	const { addNewEntry } = useContext(EntriesContext);
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

	const [isTouched, setIsTouched] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;

		addNewEntry(inputValue);
		setInputValue('');
		setIsTouched(false);
		setIsAddingEntry(false);
	};

	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			{isAddingEntry ? (
				<>
					<TextField
						autoFocus
						fullWidth
						multiline
						value={inputValue}
						onChange={handleOnChange}
						onBlur={() => setIsTouched(true)}
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder='New Entry'
						label='New Entry'
						helperText={inputValue.length <= 0 && isTouched && 'Enter a value'}
						error={inputValue.length <= 0 && isTouched}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button variant='text' onClick={() => setIsAddingEntry(false)}>
							Cancel
						</Button>
						<Button
							variant='outlined'
							color='secondary'
							endIcon={<SaveOutlined />}
							onClick={onSave}
						>
							Save
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddCircleOutlined />}
					fullWidth
					variant='outlined'
					onClick={() => setIsAddingEntry(true)}
				>
					Add Entry
				</Button>
			)}
		</Box>
	);
};
