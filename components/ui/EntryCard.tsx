import { DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui/UIContext';
import { useRouter } from 'next/router';

export const EntryCard = ({ entry }: EntryCardProps) => {
	const { startDragging, endDragging } = useContext(UIContext);
	const router = useRouter();

	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData('text', entry._id);
		startDragging();
	};

	const onDragEnd = () => {
		endDragging();
	};

	const onClick = () => {
		router.push(`/entries/${entry._id}`);
	};

	return (
		<Card
			sx={{ marginBottom: 1 }}
			onClick={onClick}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable
		>
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
