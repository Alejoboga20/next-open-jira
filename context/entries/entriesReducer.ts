import { EntriesState } from './EntriesProvider';

type EntriesActionType = { type: '[Entries] - ActionName' };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		/*  case value:
      
      break; */

		default:
			return state;
	}
};
