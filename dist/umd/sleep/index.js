(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.sleep = {}));
})(this, (function (exports) { 'use strict';

  /**
   * @getBetweenRandomNumber 获取两个数之间的随机数
   * @param minNumber 最小数
   * @param maxNumber  最大数
   * @returns  获取到的值
   */
  const getBetweenRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

  /**
   * @sleep 睡眠函数
   * @param timer  需要睡眠多久
   * @returns
   */
  const sleep = (timer = 1000) => {
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
  const randomSleep = (minTime = 500, maxTime = 5000) => sleep(getBetweenRandomNumber(minTime, maxTime));

  exports.randomSleep = randomSleep;
  exports.sleep = sleep;

}));
