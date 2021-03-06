import mongoose from 'mongoose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, event: NextFetchEvent) {
	const id = req.page.params?.id || '';

	const checkMongoIdRegExp = new RegExp('^[0-9a-fA-F]{24}$');

	if (!checkMongoIdRegExp.test(id)) {
		return new Response(JSON.stringify({ message: 'Invalid ID' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	return NextResponse.next();
}
