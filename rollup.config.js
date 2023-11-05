import path from 'path';
import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-typescript2';
import utilsFilePath from './utils/file';

/** 将文件名称转成大写 */
const fileNameToLocaleUppercase = (fileName) =>
	fileName.replace(/(\.\w{1})/g, ($1) => $1.slice(1).toLocaleUpperCase());

const config = utilsFilePath
	.map((item) => {
		// 根据获取到的文件，编译成指定文件的文件结构
		const fileName = item.split('/').pop().replace('.ts', '');
		const filePath =
			item
				.split('/')
				.slice(1, item.split('/').length - 1)
				.join('/') + (fileName === 'index' ? '' : `/${fileName}`);
		return [
			{
				input: item,
				output: [
					{
						file: path.join(__dirname, `dist/es/${filePath}/index.js`),
						format: 'es',
					},
					{
						file: path.join(__dirname, `dist/cjs/${filePath}/index.js`),
						format: 'cjs',
					},
					{
						file: path.resolve(__dirname, `./dist/umd/${filePath}/index.js`),
						format: 'umd',
						name: fileNameToLocaleUppercase(fileName),
					},
				],
				plugins: [ts()],
			},
			{
				// 打包声明文件 index.d.ts
				input: item,
				output: {
					file: path.resolve(__dirname, `./dist/es/${filePath}/index.d.ts`),
					format: 'es',
				},
				plugins: [dts.default()],
			},
		];
	})
	// 生成全局的cjs es umd 格式的文件结构
	.concat([
		{
			input: 'src/index.ts',
			output: [
				{
					file: './dist/es/index.es.js',
					format: 'es',
				},
				{
					file: './dist/cjs/index.cjs.js',
					format: 'cjs',
				},
				{
					file: path.resolve(__dirname, './dist/umd/index.umd.js'),
					format: 'umd',
					name: 'supperCodeCandy',
				},
			],
			plugins: [ts()],
		},
		{
			//打包声明文件
			input: './src/index.ts',
			output: {
				file: path.resolve(__dirname, './dist/es/index.d.ts'),
				format: 'es',
			},
			plugins: [dts.default()],
		},
	])
	.flat();

export default config;
