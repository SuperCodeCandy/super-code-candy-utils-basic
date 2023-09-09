import { getBetweenRandomNumber } from "./number";

/**
 * @sleep 睡眠函数
 * @param timer  需要睡眠多久
 * @returns
 */
export const sleep = (timer = 1000): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timer);
  });
};

/**
 * @randomSleep 随机随眠时间
 * @param minTime 最小睡眠时间
 * @param maxTime 最大睡眠时间
 * @returns
 */
export const randomSleep = (minTime = 500, maxTime = 5000) =>
  sleep(getBetweenRandomNumber(minTime, maxTime));
