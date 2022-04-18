import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
	sideMenuOpen: boolean;
	isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
	isAddingEntry: false,
};

export const UiProvider = ({ children }: UIProviderProps) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
	const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

	const setIsAddingEntry = (isAddingEntry: boolean) =>
		dispatch({ type: 'UI - Set isAddingEntry', payload: isAddingEntry });

	return (
		<UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry }}>
			{children}
		</UIContext.Provider>
	);
};
interface UIProviderProps {
	children: JSX.Element | JSX.Element[];
}
