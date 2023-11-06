# SuperCodeCandy
| 一个Utils代码包, 现在共支持如下方法

## number系列
### getBetweenRandomNumber -  获取两个数之间的随机数
```ts
/**
 * @description 获取两个数之间的随机数
 * @param minNumber 最小数
 * @param maxNumber  最大数
 * @returns  获取到的值
 */
const getBetweenRandomNumber: (minNumber: number, maxNumber: number) => number
```

## string系列

### jsonParse - 解析jsonString

```ts
/**
 * @description 解析JSON串
 * @param str  需要解析的JSON串
 * @param initValue  如果掉用JSON.parse方法失败，返回的兜底值 默认为 {}
 * @returns 解析后的结果 
 */
const jsonParse: <T extends Record<string, unknown>>(str: string, initValue?: T | undefined) => unknown
```

### formatStringToUpperCase - 格式化指定标识转为大写

```ts
/**
 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
 * @param str 需要格式化的字符串
 * @param flag 标识字符 默认为 '-'
 * @returns 转化后的数据
 */
const formatStringToUpperCase: (str?: string, flag?: string) => string
```

### formatStringToBigHumpString - 将字符串格式化为大驼峰格式

```ts
/**
 *@description 将string转为大驼峰的格式 zh-cn -> ZhCn | zh-cn-cn -> ZhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
const formatStringToBigHumpString: (str?: string, flag?: string) => string
```

### formatStringToHumpString - 将字符串格式化为驼峰格式

```ts
/**
 *@description 将string转为大驼峰的格式  zh-cn -> zhCn | zh-cn-cn -> zhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
const formatStringToHumpString: (str?: string, flag?: string) => string
```

## sleep 睡眠函数系列

### sleep - 睡眠函数

```TS
/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认 1000ms
 * @returns Promise<number>  number 为传递的时间
 */
const sleep: (timer?: number) => Promise<number>
```

### randomSleep - 随机睡眠函数

```ts
/**
 * @description 随机随眠时间
 * @param minTime 最小睡眠时间 默认值 500
 * @param maxTime 最大睡眠时间 默认值 5000
 * @returns Promise<number>
 */
const randomSleep: (minTime?: number, maxTime?: number) => Promise<number>
```