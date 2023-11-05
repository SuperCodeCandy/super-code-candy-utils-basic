/**
 * @description 获取两个数之间的随机数
 * @param minNumber 最小数
 * @param maxNumber  最大数
 * @returns  获取到的值
 */
declare const getBetweenRandomNumber: (minNumber: number, maxNumber: number) => number;

/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认1000ms
 * @returns Promise<number>
 */
declare const sleep: (timer?: number) => Promise<number>;
/**
 * @description 随机随眠时间
 * @param minTime 最小睡眠时间 默认值 500
 * @param maxTime 最大睡眠时间 默认值 5000
 * @returns Promise<number>
 */
declare const randomSleep: (minTime?: number, maxTime?: number) => Promise<number>;

/**
 * @description 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认值 {}
 * @returns 解析后的结果
 */
declare const jsonParse: <T extends Record<string, unknown>>(str: string, initValue?: T | undefined) => unknown;
/**
 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
 * @param str 需要格式化的字符串
 * @param flag 标识字符 默认为 '-'
 * @returns 转化后的数据
 */
declare const formatStringToUpperCase: (str?: string, flag?: string) => string;
/**
 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值 '-'
 * @returns 转化后的数据
 */
declare const formatStringToBigHumpString: (str?: string, flag?: string) => string;
/**
 *@description 将string转为驼峰的格式 zh-cn -> zhCn | zh-cn-cn -> zhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
declare const formatStringToHumpString: (str?: string, flag?: string) => string;

export { formatStringToBigHumpString, formatStringToHumpString, formatStringToUpperCase, getBetweenRandomNumber, jsonParse, randomSleep, sleep };
