import { useReducer } from 'react';
import { UiContext } from './UiContext';
import { uiReducer } from './uiReducer';

export interface UIState {
	sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
};

export const UiProvider = ({ children }: UIProviderProps) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	return <UiContext.Provider value={{ sideMenuOpen: false }}>{children}</UiContext.Provider>;
};
interface UIProviderProps {
	children: JSX.Element | JSX.Element[];
}
