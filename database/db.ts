import mongoose from 'mongoose';

const mongooConnection = {
	isConnected: 0,
};

export const connect = async () => {
	if (mongooConnection.isConnected === 1) {
		return console.log('Connected');
	}

	if (mongoose.connections.length > 0) {
		mongooConnection.isConnected = mongoose.connections[0].readyState;

		if (mongooConnection.isConnected === 1) {
			return console.log('Using previous connection');
		}

		await disconnect();
	}

	await mongoose.connect(process.env.MONGO_URL || '');
	mongooConnection.isConnected = 1;
	console.log('Connected to MongoDB: ', process.env.MONGO_URL);
};

export const disconnect = async () => {
	if (mongooConnection.isConnected === 0) return;
	await mongoose.disconnect();

	console.log('Disconnected to MongoDB: ');
};

/* 
0: disconnected
1: connected
2: connecting
3: disconnecting
*/
