import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entry';

type EntriesActionType =
	| { type: '[Entries] - Add Entry'; payload: Entry }
	| { type: '[Entries] - Update Entry'; payload: Entry }
	| { type: '[Entries] - Delete Entry'; payload: string }
	| { type: '[Entries] - Refresh Entries'; payload: Entry[] };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] - Add Entry':
			return {
				...state,
				entries: [...state.entries, action.payload],
			};

		case '[Entries] - Update Entry':
			return {
				...state,
				entries: state.entries.map((entry) => {
					if (entry._id === action.payload._id) {
						entry.status = action.payload.status;
						entry.description = action.payload.description;
						return entry;
					}

					return entry;
				}),
			};

		case '[Entries] - Delete Entry':
			return {
				...state,
				entries: state.entries.filter((entry) => entry._id !== action.payload),
			};

		case '[Entries] - Refresh Entries':
			return {
				...state,
				entries: [...action.payload],
			};

		default:
			return state;
	}
};
