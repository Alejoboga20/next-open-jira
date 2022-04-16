import { Box, Button, TextField } from '@mui/material';
import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material';

export const NewEntry = () => {
	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			<Button startIcon={<AddCircleOutlined />} fullWidth variant='outlined'>
				Add Entry
			</Button>
			<TextField
				autoFocus
				fullWidth
				multiline
				sx={{ marginTop: 2, marginBottom: 1 }}
				placeholder='New Entry'
				label='New Entry'
				helperText='Enter a value'
			/>
			<Box display='flex' justifyContent='space-between'>
				<Button variant='text'>Cancel</Button>
				<Button variant='outlined' color='secondary' endIcon={<SaveOutlined />}>
					Save
				</Button>
			</Box>
		</Box>
	);
};
