import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Pending: Lorem ipson dolor',
			status: 'Pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'In Progress: Lorem ipson dolor daldea staweadasda',
			status: 'In Progress',
			createdAt: Date.now() - 10000,
		},
		{
			_id: uuidv4(),
			description: 'Done: Lorem isdpsonadasd adwaea dasdqaqwea dolor',
			status: 'Done',
			createdAt: Date.now() - 12312312312,
		},
	],
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

	return (
		<EntriesContext.Provider value={{ ...state, addNewEntry }}>{children}</EntriesContext.Provider>
	);
};
interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[];
}
