import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

export const EntryCard = () => {
	return (
		<Card sx={{ marginBottom: 1 }}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>Description</Typography>
				</CardContent>

				<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
					<Typography variant='body2'>Since 30 minutes</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
