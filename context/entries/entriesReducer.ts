import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entry';

type EntriesActionType =
	| { type: '[Entries] - ActionName' }
	| { type: '[Entries] - Add Entry'; payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] - Add Entry':
			return {
				...state,
				entries: [...state.entries, action.payload],
			};

		default:
			return state;
	}
};
