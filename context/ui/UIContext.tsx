import { createContext } from 'react';

export interface UIContextProps {
	sideMenuOpen: boolean;
}

export const UIContext = createContext({} as UIContextProps);
