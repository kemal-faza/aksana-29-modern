module.exports = {
	apps: [
		{
			name: 'aksana-be',
			cwd: './apps/backend',
			script: './dist/server.js',
			env: { DOTENV_CONFIG_PATH: './apps/backend/.env' },
		},
		{
			name: 'aksana-be-staging',
			cwd: './apps/backend',
			script: './dist/server.js',
			env: { DOTENV_CONFIG_PATH: './apps/backend/.env.staging' },
		},
		{
			name: 'aksana-fe',
			cwd: './apps/frontend',
			script: './node_modules/.bin/next',
			args: 'start -p 3000',
			env: { DOTENV_CONFIG_PATH: './apps/frontend/.env' },
		},
		{
			name: 'aksana-fe-staging',
			cwd: './apps/frontend',
			script: './node_modules/.bin/next',
			args: 'start -p 3001',
			env: { DOTENV_CONFIG_PATH: './apps/frontend/.env.staging' },
		},
	],
};
