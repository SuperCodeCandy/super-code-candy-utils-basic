/**
 * @description 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认值 {}
 * @returns 解析后的结果
 */
export const jsonParse = <T extends Record<string, unknown>>(
	str: string,
	initValue?: T,
): T | unknown => {
	try {
		return JSON.parse(str);
	} catch {
		return initValue ?? {};
	}
};

/**
 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
 * @param str 需要格式化的字符串
 * @param flag 标识字符 默认为 '-'
 * @returns 转化后的数据
 */
export const formatStringToUpperCase = (str = '', flag = '-') =>
	str.replace(new RegExp(`${flag}\\w*`, 'gi'), (s) => s.toLocaleUpperCase());

/**
 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值 '-'
 * @returns 转化后的数据
 */
export const formatStringToBigHumpString = (str = '', flag = '-') =>
	str
		.replace(new RegExp(`(^.{1})|(${flag}\\w{1})`, 'gi'), ($1) =>
			$1.toLocaleUpperCase(),
		)
		.replace(new RegExp(`${flag}`, 'g'), '');

/**
 *@description 将string转为驼峰的格式 zh-cn -> zhCn | zh-cn-cn -> zhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
export const formatStringToHumpString = (str = '', flag = '-') =>
	str
		.replace(new RegExp(`(${flag}\\w{1})`, 'gi'), ($1) =>
			$1.toLocaleUpperCase(),
		)
		.replace(new RegExp(`${flag}`, 'g'), '');
