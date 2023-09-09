'use strict';

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

exports.jsonParse = jsonParse;
