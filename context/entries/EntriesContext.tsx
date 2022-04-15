import { createContext } from 'react';

export interface EntriesContextProps {
	entries: any[] /* TODO: define type */;
}

export const EntriesContext = createContext({} as EntriesContextProps);
