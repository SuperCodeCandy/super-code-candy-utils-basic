import fs from 'fs';
import path from 'path';

const formatStringToHumpString = (str = '', flag = '-') =>
	str
		.replace(new RegExp(`(${flag}\\w{1})`, 'gi'), ($1) =>
			$1.toLocaleUpperCase(),
		)
		.replace(new RegExp(`${flag}`, 'g'), '');

const init = () => {
	fs.readdir(path.join(process.cwd(), './src'), (err, data) => {
		const fileContent = data.reduce((prev, cur, index) => {
			const fileName = cur.replace(/\.ts/, '');
			const namespace = formatStringToHumpString(fileName);
			if (fileName === 'index') {
				return prev;
			}
			return (
				prev +
				namespace +
				` } from './${fileName}/index.js';` +
				(index === data.length - 1 ? '' : '\r\nexport { default as ')
			);
		}, 'export { default as ');
		fs.writeFile(
			path.join(process.cwd(), './dist/es/index.es.js'),
			fileContent,
			(err) => {},
		);
		console.log(fileContent.replace(/\/index\.js/g, ''));
		fs.writeFile(
			path.join(process.cwd(), './dist/es/index.d.ts'),
			fileContent.replace(/\/index\.js/g, ''),
			(err) => {},
		);
	});
};

init();
