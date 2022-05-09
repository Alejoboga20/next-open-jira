export const seedData: SeedData = {
	entries: [
		{
			description: 'Pending: Lorem ipson dolor',
			status: 'Pending',
			createdAt: Date.now(),
		},
		{
			description: 'In Progress: Lorem ipson dolor daldea staweadasda',
			status: 'In Progress',
			createdAt: Date.now() - 10000,
		},
		{
			description: 'Done: Lorem isdpsonadasd adwaea dasdqaqwea dolor',
			status: 'Done',
			createdAt: Date.now() - 12312312312,
		},
	],
};

interface SeedData {
	entries: SeedEntry[];
}

interface SeedEntry {
	description: string;
	status: string;
	createdAt: number;
}
