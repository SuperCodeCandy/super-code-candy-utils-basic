/**
 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值 '-'
 * @returns 转化后的数据
 */
const formatStringToBigHumpString = (str = '', flag = '-') =>
	str
		.replace(new RegExp(`(^.{1})|(${flag}\\w{1})`, 'gi'), ($1) =>
			$1.toLocaleUpperCase(),
		)
		.replace(new RegExp(`${flag}`, 'g'), '');

export default formatStringToBigHumpString;
