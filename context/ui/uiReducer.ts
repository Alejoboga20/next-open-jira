import { UIState } from './UIProvider';

type UIAction =
	| { type: 'UI - Open Sidebar' }
	| { type: 'UI - Close Sidebar' }
	| { type: 'UI - Start Dragging' }
	| { type: 'UI - End Dragging' }
	| { type: 'UI - Set isAddingEntry'; payload: boolean };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
	switch (action.type) {
		case 'UI - Open Sidebar':
			return {
				...state,
				sideMenuOpen: true,
			};

		case 'UI - Close Sidebar':
			return {
				...state,
				sideMenuOpen: false,
			};

		case 'UI - Start Dragging':
			return {
				...state,
				isDragging: true,
			};

		case 'UI - End Dragging':
			return {
				...state,
				isDragging: false,
			};

		case 'UI - Set isAddingEntry':
			return {
				...state,
				isAddingEntry: action.payload,
			};

		default:
			return state;
	}
};
