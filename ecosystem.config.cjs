module.exports = {
	apps: [
		{
			name: 'aksana-be',
			cwd: './apps/backend',
			script: './dist/server.js',
			env: { DOTENV_CONFIG_PATH: '.env' },
		},
		{
			name: 'aksana-be-staging',
			cwd: './apps/backend',
			script: './dist/server.js',
			env: { DOTENV_CONFIG_PATH: '.env.staging' },
		},
		{
			name: 'aksana-fe',
			cwd: './apps/frontend',
			interpreter: 'none',
			script: './node_modules/.bin/next',
			args: 'start -p 3000',
			env: { DOTENV_CONFIG_PATH: '.env' },
		},
		{
			name: 'aksana-fe-staging',
			cwd: './apps/frontend',
			interpreter: 'none',
			script: './node_modules/.bin/next',
			args: 'start -p 3001',
			env: { DOTENV_CONFIG_PATH: '.env.staging' },
		},
	],
};
