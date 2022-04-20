import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ name: 'Example' });
};
