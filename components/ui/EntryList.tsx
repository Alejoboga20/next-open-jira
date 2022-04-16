import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { Status } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries/EntriesContext';

export const EntryList = ({ status }: EntryListProps) => {
	const { entries } = useContext(EntriesContext);
	const entriesByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		[entries]
	);

	return (
		<div>
			<Paper
				sx={{
					height: 'calc(100vh - 180px)',
					overflowY: 'scroll',
					backgroundColor: 'transparent',
					padding: '1px 5px',
				}}
			>
				<List sx={{ opacity: 1 }}>
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
