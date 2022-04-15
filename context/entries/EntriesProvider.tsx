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
			description: 'Lorem ipson dolor',
			status: 'Pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipson dolor daldea staweadasda',
			status: 'In Progress',
			createdAt: Date.now() - 10000,
		},
		{
			_id: uuidv4(),
			description: 'Lorem isdpsonadasd adwaea dasdqaqwea dolor',
			status: 'Pending',
			createdAt: Date.now() - 12312312312,
		},
	],
};
export const EntriesProvider = ({ children }: EntriesProviderProps) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[];
}
