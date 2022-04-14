import { createContext } from 'react';

export interface UiContextProps {
	sideMenuOpen: boolean;
}

export const UiContext = createContext({} as UiContextProps);
