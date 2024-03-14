// import type { PlaywrightTestConfig } from '@playwright/test';
// const config: PlaywrightTestConfig = {
// 	webServer: { command: 'npm run build && npm run preview', port: 4173 },
// 	testDir: 'tests',
// 	testMatch: /(.+.)?(test|spec).[jt]s/,
// 	use: { headless: false }
// };
// export default config;

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests/',
	workers: 4,
	webServer: {
		command: 'npm run build && npm run preview',
		timeout: 600000,
		port: 4173
	},
	use: { headless: false }
};

export default config;
