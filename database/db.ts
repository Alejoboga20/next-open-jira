import mongoose from 'mongoose';

const mongoConnection = {
	isConnected: 0,
};

export const connect = async () => {
	if (mongoConnection.isConnected === 1) {
		return console.log('Connected');
	}

	if (mongoose.connections.length > 0) {
		mongoConnection.isConnected = mongoose.connections[0].readyState;

		if (mongoConnection.isConnected === 1) {
			return console.log('Using previous connection');
		}

		await disconnect();
	}

	await mongoose.connect(process.env.MONGO_URL || '');
	mongoConnection.isConnected = 1;
	console.log('Connected to MongoDB: ', process.env.MONGO_URL);
};

export const disconnect = async () => {
	if (process.env.NODE_ENV === 'development') return;

	if (mongoConnection.isConnected === 0) return;
	await mongoose.disconnect();

	console.log('Disconnected to MongoDB: ');
};

/* 
0: disconnected
1: connected
2: connecting
3: disconnecting
*/
