import { getBetweenRandomNumber } from './number';
/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认1000ms
 * @returns Promise<number>
 */
export const sleep = (timer: number = 1000): Promise<number> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(timer);
		}, timer);
	});

/**
 * @description 随机随眠时间
 * @param minTime 最小睡眠时间 默认值 500
 * @param maxTime 最大睡眠时间 默认值 5000
 * @returns Promise<number>
 */
export const randomSleep = (minTime: number = 500, maxTime = 5000) =>
	sleep(getBetweenRandomNumber(minTime, maxTime));
