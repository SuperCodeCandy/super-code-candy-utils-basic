import getBetweenRandomNumber from './get-between-random-number';
import sleep from './sleep';

/**
 * @description 随机随眠时间
 * @param minTime 最小睡眠时间 默认值 500
 * @param maxTime 最大睡眠时间 默认值 5000
 * @returns Promise<number>
 */
const randomSleep = (minTime: number = 500, maxTime = 5000) =>
	sleep(getBetweenRandomNumber(minTime, maxTime));

export default randomSleep;
