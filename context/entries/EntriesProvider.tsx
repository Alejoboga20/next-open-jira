import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [],
};
export const EntriesProvider = ({ children }: EntriesProviderProps) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			createdAt: Date.now(),
			description,
			status: 'Pending',
		};

		dispatch({ type: '[Entries] - Add Entry', payload: newEntry });
	};

	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entries] - Update Entry', payload: entry });
	};

	return (
		<EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
			{children}
		</EntriesContext.Provider>
	);
};
interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[];
}
