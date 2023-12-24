/**
 * @description 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认值 {}
 * @returns 解析后的结果
 */
const jsonParse = <T>(str: string, initValue?: T): T | unknown => {
	try {
		return JSON.parse(str);
	} catch {
		return initValue ?? {};
	}
};
export default jsonParse;
