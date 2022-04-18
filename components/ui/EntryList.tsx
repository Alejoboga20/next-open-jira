import { useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { Status } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
import styles from './EntryList.module.css';

export const EntryList = ({ status }: EntryListProps) => {
	const { entries } = useContext(EntriesContext);
	const { isDragging } = useContext(UIContext);

	const entriesByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		[entries]
	);

	const allowDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
		const id = event.dataTransfer.getData('text');
	};

	return (
		<div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
			<Paper
				sx={{
					height: 'calc(100vh - 180px)',
					overflowY: 'scroll',
					backgroundColor: 'transparent',
					padding: '1px 5px',
				}}
			>
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.5s' }}>
					{entriesByStatus.map((entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};

interface EntryListProps {
	status: Status;
}
