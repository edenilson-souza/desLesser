export default {
	// preset: 'jest-playwright-preset',
	// testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	// setupFilesAfterEnv: ['expect-playwright'],
	// transform: {
	// 	'^.+\\.ts$': 'ts-jest'
	// },
	// verbatimModuleSyntax: false

	preset: '@playwright/test',
	testMatch: '**/*.test.ts'
};
