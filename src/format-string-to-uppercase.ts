/**
 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
 * @param str 需要格式化的字符串
 * @param flag 标识字符 默认为 '-'
 * @returns 转化后的数据
 */
const formatStringToUpperCase = (str = '', flag = '-') =>
	str.replace(new RegExp(`${flag}\\w*`, 'gi'), (s) => s.toLocaleUpperCase());

export default formatStringToUpperCase;
