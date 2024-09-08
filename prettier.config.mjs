/** @type {import("prettier").Config} */
const config = {
	endOfLine: 'lf',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	printWidth: 80,
	overrides: [
		{
			files: ['*.tsx', '*.ts'],
			options: {
				parser: 'typescript',
			},
		},
	],
}

export default config
