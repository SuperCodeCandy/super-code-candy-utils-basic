(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.laodingtouUtils = {}));
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

  /**
   * @jsonParse 解析JSON串
   * @param str  需要解析的JSON串
   * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认为{}
   * @returns 解析后的结果
   */
  const jsonParse = (str, initValue) => {
      try {
          return JSON.parse(str);
      }
      catch (_a) {
          return initValue !== null && initValue !== void 0 ? initValue : {};
      }
  };

  exports.getBetweenRandomNumber = getBetweenRandomNumber;
  exports.jsonParse = jsonParse;
  exports.randomSleep = randomSleep;
  exports.sleep = sleep;

}));
