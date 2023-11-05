/**
 * @description 获取两个数之间的随机数
 * @param minNumber 最小数
 * @param maxNumber  最大数
 * @returns  获取到的值
 */
export const getBetweenRandomNumber = (
	minNumber: number,
	maxNumber: number,
): number => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
