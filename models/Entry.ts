import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces/entry';

interface IEntry extends Entry {}

const entrySchema = new Schema({
	description: { type: String, required: true },
	createdAt: { type: Number, required: true },
	status: {
		type: String,
		enum: {
			values: ['Pending', 'In Progress', 'Done'],
			message: '{VALUE} is not a valid state',
		},
	},
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

const entry = new EntryModel();

export default EntryModel;
