import { useEffect, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [],
};
export const EntriesProvider = ({ children }: EntriesProviderProps) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	const addNewEntry = async (description: string) => {
		const { data } = await entriesApi.post<Entry>('/entries', {
			description,
		});

		dispatch({ type: '[Entries] - Add Entry', payload: data });
	};

	const updateEntry = async ({ _id, description, status }: Entry) => {
		try {
			const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
				description,
				status,
			});
			dispatch({ type: '[Entries] - Update Entry', payload: data });
		} catch (error) {
			console.log({ error });
		}
	};

	const refreshEntries = async () => {
		const { data } = await entriesApi.get<Entry[]>('/entries');
		dispatch({ type: '[Entries] - Refresh Entries', payload: data });
	};

	useEffect(() => {
		refreshEntries();
	}, []);

	return (
		<EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
			{children}
		</EntriesContext.Provider>
	);
};
interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[];
}
