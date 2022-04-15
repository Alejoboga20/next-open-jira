import { useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';

export interface EntriesState {
	entries: any[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [],
};
export const EntriesProvider = ({ children }: EntriesProviderProps) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[];
}
