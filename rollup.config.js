import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';
import external from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: {
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
		plugins: [resolve(), image(), svg(), external(), typescript({ tsconfig: './tsconfig.json' })],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
