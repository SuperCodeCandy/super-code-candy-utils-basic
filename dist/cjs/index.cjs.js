'use strict';

/**
 * @description 获取两个数之间的随机数
 * @param minNumber 最小数
 * @param maxNumber  最大数
 * @returns  获取到的值
 */
const getBetweenRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认1000ms
 * @returns Promise<number>
 */
const sleep = (timer = 1000) => new Promise((resolve) => {
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
const randomSleep = (minTime = 500, maxTime = 5000) => sleep(getBetweenRandomNumber(minTime, maxTime));

/**
 * @description 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue 如果掉用JSON.parse方法失败，返回的兜底值 默认值 {}
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
/**
 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
 * @param str 需要格式化的字符串
 * @param flag 标识字符 默认为 '-'
 * @returns 转化后的数据
 */
const formatStringToUpperCase = (str = '', flag = '-') => str.replace(new RegExp(`${flag}\\w*`, 'gi'), (s) => s.toLocaleUpperCase());
/**
 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值 '-'
 * @returns 转化后的数据
 */
const formatStringToBigHumpString = (str = '', flag = '-') => str
    .replace(new RegExp(`(^.{1})|(${flag}\\w{1})`, 'gi'), ($1) => $1.toLocaleUpperCase())
    .replace(new RegExp(`${flag}`, 'g'), '');
/**
 *@description 将string转为驼峰的格式 zh-cn -> zhCn | zh-cn-cn -> zhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
const formatStringToHumpString = (str = '', flag = '-') => str
    .replace(new RegExp(`(${flag}\\w{1})`, 'gi'), ($1) => $1.toLocaleUpperCase())
    .replace(new RegExp(`${flag}`, 'g'), '');

exports.formatStringToBigHumpString = formatStringToBigHumpString;
exports.formatStringToHumpString = formatStringToHumpString;
exports.formatStringToUpperCase = formatStringToUpperCase;
exports.getBetweenRandomNumber = getBetweenRandomNumber;
exports.jsonParse = jsonParse;
exports.randomSleep = randomSleep;
exports.sleep = sleep;
