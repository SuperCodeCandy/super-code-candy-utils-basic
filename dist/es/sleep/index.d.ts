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

export { randomSleep, sleep };
