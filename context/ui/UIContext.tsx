import { createContext } from 'react';

export interface UIContextProps {
	sideMenuOpen: boolean;
	isAddingEntry: boolean;

	setIsAddingEntry: (isAddingEntry: boolean) => void;
	openSideMenu: () => void;
	closeSideMenu: () => void;
}

export const UIContext = createContext({} as UIContextProps);
