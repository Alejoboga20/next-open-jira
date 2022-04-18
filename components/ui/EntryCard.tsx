import { DragEvent } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';

export const EntryCard = ({ entry }: EntryCardProps) => {
	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData('text', entry._id);
		/* TODO: Modify state to indicate onDrag */
	};

	const onDragEnd = () => {
		/* TODO: End drag*/
	};

	return (
		<Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
				</CardContent>

				<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
					<Typography variant='body2'>Since: {entry.createdAt}</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

interface EntryCardProps {
	entry: Entry;
}
