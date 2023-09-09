/**
 * @getBetweenRandomNumber 获取两个数之间的随机数
 * @param minNumber 最小数
 * @param maxNumber  最大数
 * @returns  获取到的值
 */
declare const getBetweenRandomNumber: (minNumber: number, maxNumber: number) => number;

/**
 * @sleep 睡眠函数
 * @param timer  需要睡眠多久
 * @returns
 */
declare const sleep: (timer?: number) => Promise<boolean>;
/**
 * @randomSleep 随机随眠时间
 * @param minTime 最小睡眠时间
 * @param maxTime 最大睡眠时间
 * @returns
 */
declare const randomSleep: (minTime?: number, maxTime?: number) => Promise<boolean>;

/**
 * @jsonParse 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认为{}
 * @returns 解析后的结果
 */
declare const jsonParse: <T>(str: string, initValue?: T | undefined) => unknown;

export { getBetweenRandomNumber, jsonParse, randomSleep, sleep };
