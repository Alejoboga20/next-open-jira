import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry } from '../../../../models';
import { IEntry } from '../../../../models/Entry';

type Data =
	| {
			message: string;
	  }
	| IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { id } = req.query;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).json({ message: 'Invalid ID' });
	}

	switch (req.method) {
		case 'GET':
			return getEntry(req, res);
		case 'PUT':
			return updateEntry(req, res);
		case 'DELETE':
			return deleteEntry(req, res);

		default:
			return res.status(400).json({ message: 'Bad Request - Invalid Method' });
	}
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;

	await db.connect();

	const entry = await Entry.findById(id);

	await db.disconnect();

	if (!entry) {
		return res.status(400).json({ message: 'No entry with such ID' });
	}

	res.status(200).json(entry);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;

	await db.connect();

	const entryToUpdate = await Entry.findById(id);

	if (!entryToUpdate) {
		await db.disconnect();
		return res.status(400).json({ message: 'No entry with such ID' });
	}

	const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

	try {
		const updatedEntry = await Entry.findByIdAndUpdate(
			id,
			{ description, status },
			{ runValidators: true, new: true }
		);

		await db.disconnect();
		res.status(200).json(updatedEntry!);
	} catch (error: any) {
		await db.disconnect();
		res.status(400).json({ message: error.errors.status.message });
	}

	await db.disconnect();
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;

	await db.connect();

	const entryToDelete = await Entry.findById(id);

	if (!entryToDelete) return res.status(400).json({ message: 'Entry not found' });

	try {
		const entryDeleted = await Entry.findByIdAndDelete(id);
		await db.disconnect();

		res.status(200).json(entryDeleted!);
	} catch (error: any) {
		await db.disconnect();
		res.status(400).json({ message: error.errors.status.message });
	}

	await db.disconnect();
};
